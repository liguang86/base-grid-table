<template>
  <div class="base-grid-table-cell">
    <div ref="cell">
      <template v-if="!column.template && !column.cellComponent">
        {{textValue}}
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
// 事件 cellLink(query, column, row)
export default {
  props: {
    column: {
      required: true
    },
    row: {
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {
    let initCell = () => {
      let ctx = this
      if (ctx.cellComponent) {
        ctx.cellComponent && ctx.cellComponent.$destroy()
        ctx.cellComponent = null
      }
      if (ctx.column.cellComponent) {
        let VueComponent = ctx.column.cellComponent
        ctx.cellComponent = new VueComponent({
          el: ctx.$refs.cell,
          store: ctx.$store,
          router: ctx.$router,
          data: {
            data: ctx.row
          },
          mounted () {
            ctx.$nextTick(() => {
              ctx.$emit('cellRenderCompleted')
            })
          }
        })
      } else if (ctx.column.template) {
        ctx.cellComponent = new Vue({
          el: ctx.$refs.cell,
          store: ctx.$store,
          components: ctx.column.templateComponents || {},
          beforeCreate () {
            this.$options.template = ctx.column.template
            if (ctx.column.context) {
              let obj = {}
              _.forOwn(ctx.column.context, (v, k) => {
                if (_.isFunction(v)) {
                  if (v !== 'mounted') {
                    this.$options.methods[k] = v
                  }
                } else {
                  obj[k] = v
                }
              })
              this.$options.data = function () {
                return { data: ctx.row, ...obj }
              }
            } else {
              this.$options.data = function () {
                return { data: ctx.row }
              }
            }
          },
          mounted () {
            ctx.column.context && ctx.column.context.mounted && ctx.column.context.mounted.apply(this)
            ctx.$nextTick(() => {
              ctx.$emit('cellRenderCompleted')
            })
          }
        })
      } else {
        ctx.$nextTick(() => {
          ctx.$emit('cellRenderCompleted')
        })
      }
    }
    this.initCellDebounce = _.debounce(() => {
      initCell()
    }, 200)
    initCell()
  },
  computed: {
    fieldValue () {
      return this.column.field ? _.get(this.row, this.column.field) : null
    },
    textValue () {
      let val
      if (this.column.cellRenderer) {
        val = this.column.cellRenderer(this.fieldValue, this.row, this.column)
      } else {
        val = this.fieldValue
      }
      return val
    }
  },
  beforeDestroy () {
    if (this.cellComponent) {
      this.cellComponent && this.cellComponent.$destroy()
    }
  },
  watch: {
    column () {
      this.initCellDebounce()
    },
    row () {
      if (this.cellComponent) {
        this.cellComponent.data = this.row
      }
    }
  }
}
</script>
