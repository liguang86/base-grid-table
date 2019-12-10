<template>
  <div ref="row">
  </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
export default {
  props: {
    config: {
      required: true
    },
    row: {
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    initRow () {
      let ctx = this
      if (ctx.rowComponent) {
        ctx.rowComponent && ctx.rowComponent.$destroy()
        ctx.rowComponent = null
      }
      if (ctx.config.rowComponent) {
        let VueComponent = ctx.config.rowComponent
        ctx.rowComponent = new VueComponent({
          el: ctx.$refs.row,
          data: {
            data: ctx.row
          }
        })
        return
      }
      if (ctx.config.template) {
        ctx.rowComponent = new Vue({
          el: ctx.$refs.row,
          components: ctx.config.templateComponents || {},
          beforeCreate () {
            this.$options.template = ctx.config.template
            if (ctx.config.context) {
              let obj = {}
              _.forOwn(ctx.config.context, (v, k) => {
                if (_.isFunction(v)) {
                  this.$options.methods[k] = v
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
          }
        })
      }
    }
  },
  mounted () {
    this.initRow()
  },
  beforeDestroy () {
    if (this.rowComponent) {
      this.rowComponent && this.rowComponent.$destroy()
    }
  },
  watch: {
    config () {
      this.initRow()
    },
    row () {
      if (this.rowComponent) {
        this.rowComponent.data = this.row
      }
    }
  }
}
</script>
