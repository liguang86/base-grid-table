<template>
  <div class="base-grid-table-header-cell" ref="cell">
  </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
export default {
  props: {
    column: {
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    initHeader () {
      let ctx = this
      if (ctx.headerComponent) {
        ctx.headerComponent && ctx.headerComponent.$destroy()
        ctx.headerComponent = null
      }
      if (ctx.column.headerTemplate) {
        ctx.headerComponent = new Vue({
          el: ctx.$refs.header,
          components: ctx.column.headerTemplateComponents || {},
          beforeCreate () {
            this.$options.template = ctx.column.headerTemplate
            if (ctx.column.headerContext) {
              let obj = {}
              _.forOwn(ctx.column.headerContext, (v, k) => {
                if (_.isFunction(v)) {
                  this.$options.methods[k] = v
                } else {
                  obj[k] = v
                }
              })
              this.$options.data = function () {
                return { ...obj }
              }
            } else {
              this.$options.data = function () {
                return {}
              }
            }
          }
        })
      } else if (ctx.column.headerComponent) {
        let VueComponent = ctx.column.headerComponent
        ctx.headerComponent = new VueComponent({
          el: ctx.$refs.cell,
          store: ctx.$store,
          data: {
            column: ctx.column
          }
        })
      }
    }
  },
  beforeDestroy () {
    if (this.headerComponent) {
      this.headerComponent && this.headerComponent.$destroy()
    }
  },
  mounted () {
    this.initHeader()
  },
  watch: {
    column () {
      this.initHeader()
    }
  }
}
</script>
