<template>
  <div id="app">
    <h2>示例</h2>
    <base-grid-table :row-key-prop-name="'id'" :columns="columns" :is-full-row="isFullRow" :full-row-config="fullRowConfig" :items="items"></base-grid-table>
  </div>
</template>

<script>
import Vue from 'vue'
import BaseGridTable from '../packages/base-grid-table/src'
export default {
  name: 'app',
  components: { BaseGridTable },
  data () {
    let ctx = this
    return {
      stateNames: ['状态1', '状态2', '状态3'],
      columns: [
        {
          field: 'state',
          headerName: '状态(自定义组件)',
          width: 120,
          cellComponent: Vue.extend({
            template: `
              <span class="cell-state">
                {{stateName}}
              </span>`,
            computed: {
              stateName () {
                return ctx.stateNames[this.data.state] || '未知'
              }
            }
          })
        },
        {
          field: 'state2',
          headerName: '状态（自定义格式化）',
          flex: 1,
          cellRenderer (val, data) {
            return ctx.stateNames[val] || '未知'
          }
        },
        {
          field: 'col1',
          headerName: '列1',
          width: 160
        },
        {
          field: 'col2',
          headerName: '列2',
          width: '10%'
        },
        {
          field: 'col3',
          headerName: '列3',
          flex: 3,
          cellStyle: { textAlign: 'center' },
          headerStyle: { textAlign: 'center' }
        }
      ],
      items: [
        {
          id: 1,
          state: 0,
          col1: '列1的值',
          col2: '列2的值',
          col3: '列3的值'
        },
        {
          id: 2,
          isFullRow: true
        },
        {
          id: 3,
          state: 0,
          col1: '列1的值',
          col2: '列2的值',
          col3: '列3的值'
        }
      ],
      fullRowConfig: {
        rowComponent: Vue.extend({
          template: '<div class="full-row"><p>这是一整行</p></div>'
        })
      }
    }
  },
  methods: {
    isFullRow (row) {
      return row.isFullRow
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
.full-row
  p
    width 100%
    text-align center
    margin 0
.cell-state
  color #f00
</style>
