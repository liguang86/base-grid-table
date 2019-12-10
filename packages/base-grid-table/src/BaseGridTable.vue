<template>
  <div class="base-grid-table" ref="table">
    <div class="base-grid-table-header" :style="hasScrollbar ? {'padding-right': `${getScrollbarWidth()}px`} : null">
      <div v-for="(column, idx) in columns" :key="column.field" :style="[columnWidthObjList[idx], column.headerStyle]" :class="[column.headerClass]">
        <template v-if="!column.headerComponent">
          {{column.headerName}}
        </template>
        <div v-else :is="column.headerComponent"></div>
      </div>
    </div>
    <div v-if="items && items.length > 0" class="base-grid-table-content" ref="tableContent" key="1">
      <div :class="['base-grid-table-row', {selected: item.selected}, getRowClass && getRowClass(item), isFullRow && isFullRow(item) ? 'base-grid-table-full-row' : null]" :style="{visible: columnWidthObjList.length ? 'visible' : 'hidden'}" v-for="(item, idx) in items" :id="`grid_table_${count}_${getKey(item, idx)}`" :key="getKey(item, idx)" @dblclick="onRowDbClick(item)" @click="onRowClick($event, item)">
        <base-grid-table-template-full-row v-if="isFullRow && isFullRow(item)" :row="item" :config="fullRowConfig"></base-grid-table-template-full-row>
        <template v-else>
          <div v-for="(column, idx) in columns" :key="column.field" :style="[columnWidthObjList[idx], getCellClassOrStyle(column.cellStyle, item)]" :class="[getCellClassOrStyle(column.cellClass, item)]">
            <div :is="cellComponent" :column="column" :row="item" @cellRenderCompleted="onCellRenderCompleted" @cellLink="onCellLink"></div>
          </div>
        </template>
      </div>
    </div>
    <div class="no-data" v-else key="2">
      {{noDataTip}}
    </div>
  </div>
</template>

<script>
// column 中
// width [number|string]
//  number 数字（此时，此列的宽度固定为指定px），
//  string 百分比，如'50%'（此时，它的宽度为Table总宽的百分比）
// flex [number]
//  number 数字（会将剩余没有分配完的空间通过flex设置的比例来分配）
// 不指定宽度时，会把多余的宽度平分
// 如果上述规则还有剩余空间，则会按从右向左的顺序分配，此时不考虑分配比例（当然也受maxWidth的限制）
// 每个列的宽度不能小于24
import Utils from '@liguang/common-utils'
import BaseGridTableTemplateCell from './BaseGridTableTemplateCell.vue'
import BaseGridTableTemplateFullRow from './BaseGridTableTemplateFullRow.vue'
import _ from 'lodash'
let count = 0
let minColumnWidth = 24
export default {
  name: 'BaseGridTable',
  components: { BaseGridTableTemplateFullRow },
  props: {
    // 可以传入默认自定义组件
    cellComponent: {
      default () {
        return BaseGridTableTemplateCell
      }
    },
    columns: {
      required: true
    },
    items: {
      default () {
        return []
      }
    },
    rowKeyPropName: {
      type: String
    },
    noDataTip: {
      default () {
        return '暂无数据'
      }
    },
    selection: {
      default () {
        return 'single'
      },
      validator (val) {
        return ['single', 'none', 'multiple'].indexOf(val) > -1
      }
    },
    // 再次点击已选择的项时，是否取消选择，默认为 true
    toggleSelection: {
      default () {
        return true
      }
    },
    getRowClass: {
      type: Function
    },
    isFullRow: {
      type: Function
    },
    fullRowConfig: {
      default () {
        return null
      }
    }
  },
  data () {
    return {
      hasScrollbar: false,
      count: ++count,
      columnWidthObjList: []
    }
  },
  methods: {
    getScrollbarWidth: Utils.getScrollbarWidth,
    calWidthForCols (cols, tableWidth) {
      if (cols && cols.length) {
        let leftWidth = tableWidth
        let totalFlex = 0
        let flexCols = []
        let noWidthCols = []
        _.forEach(cols, e => {
          e.calWidth = 0
          if (!e.minWidth || e.minWidth < minColumnWidth) {
            e.minWidth = minColumnWidth
          }
          if (_.isNumber(e.width)) {
            if (e.minWidth && e.width < e.minWidth) {
              e.calWidth = e.minWidth
            } else if (e.maxWidth && e.width > e.maxWidth) {
              e.calWidth = e.maxWidth
            } else {
              e.calWidth = e.width
            }
            leftWidth -= e.calWidth
          } else {
            if (_.isString(e.width) && e.width.endsWith('%')) {
              let percent = +e.width.replace('%', '') || 0
              if (percent) {
                let w = Math.floor(percent * tableWidth / 100)
                if (e.maxWidth && e.maxWidth < w) {
                  w = e.maxWidth
                } else if (e.minWidth && e.minWidth > w) {
                  w = e.minWidth
                }
                e.calWidth = w
                leftWidth -= e.calWidth
              } else {
                noWidthCols.push(e)
              }
            } else if (_.isNumber(e.flex) && e.flex) {
              totalFlex += e.flex
              flexCols.push(e)
            } else {
              noWidthCols.push(e)
            }
          }
        })
        // 如果有剩余, 分配给Flex
        if (leftWidth > 0 && totalFlex > 0) {
          let totalFlexLeft = totalFlex
          // 将超出最小值或最大值的优先计算
          let calcFun = (arr) => {
            let leftArr = []
            _.forEach(arr, e => {
              let calWidth = Math.floor(e.flex / totalFlexLeft * leftWidth)
              let exceed = false
              if (e.maxWidth && calWidth > e.maxWidth) {
                calWidth = e.maxWidth
                exceed = true
              } else if (e.minWidth && calWidth < e.minWidth) {
                calWidth = e.minWidth
                exceed = true
              }
              if (exceed) {
                e.calWidth = calWidth
                totalFlexLeft -= e.flex
                leftWidth -= calWidth
              } else {
                leftArr.push(e)
              }
            })
            if (leftArr.length !== arr.length && leftArr.length >= 2) {
              calcFun(leftArr)
            }
          }
          calcFun(flexCols)
          // 设置宽度
          _.forEach(flexCols, e => {
            if (!e.calWidth) {
              let calWidth = Math.floor(e.flex / totalFlexLeft * leftWidth)
              e.calWidth = calWidth
              totalFlexLeft -= e.flex
              leftWidth -= calWidth
            }
          })
        }
        // 将空间分配到未设置width的列
        if (leftWidth > 0 && noWidthCols.length) {
          // 将超出最小值或最大值的优先计算
          let leftColCount = noWidthCols.length
          let calcFun = (arr) => {
            let leftArr = []
            _.forEach(arr, e => {
              let calWidth = Math.floor(leftWidth / leftColCount)
              let exceed = false
              if (e.maxWidth && calWidth > e.maxWidth) {
                calWidth = e.maxWidth
                exceed = true
              } else if (e.minWidth && calWidth < e.minWidth) {
                calWidth = e.minWidth
                exceed = true
              }
              if (exceed) {
                e.calWidth = calWidth
                leftColCount--
                leftWidth -= calWidth
              } else {
                leftArr.push(e)
              }
            })
            if (leftArr.length !== arr.length && leftArr.length >= 2) {
              calcFun(leftArr)
            }
          }
          calcFun(noWidthCols)
          // 设置宽度
          if (leftColCount) {
            _.forEach(noWidthCols, e => {
              if (!e.calWidth) {
                let calWidth = Math.floor(leftWidth / leftColCount)
                e.calWidth = calWidth
                leftWidth -= calWidth
                leftColCount--
              }
            })
          }
        }
        // 如果还存在空间，则从后向前尽量分配（不考虑比例）
        if (leftWidth > 0) {
          for (let i = cols.length - 1; i > -1; i--) {
            if (!cols[i].maxWidth) {
              cols[i].calWidth += leftWidth
              break
            } else {
              let w = cols[i].calWidth + leftWidth
              if (w > cols[i].maxWidth) {
                leftWidth = w - cols[i].maxWidth
                cols[i].calWidth = cols[i].maxWidth
              } else {
                cols[i].calWidth = w
                break
              }
            }
          }
        } else {
          // 检查最小列宽，都不能小于 minColumnWidth
          _.forEach(cols, e => {
            if (e.calWidth < minColumnWidth) {
              e.calWidth = minColumnWidth
            }
          })
        }
      }
    },
    initColumnWidthObject () {
      if (!this.$refs.table) return
      let tableWidth = this.$refs.table.offsetWidth - 2 - (this.hasScrollbar ? this.getScrollbarWidth() : 0)
      this.calWidthForCols(this.columns, tableWidth)
      let list = []
      for (let i = 0; i < this.columns.length; i++) {
        let col = this.columns[i]
        list.push(this.getColumnWidthObject(col, this.columns, i))
      }
      this.columnWidthObjList = list
    },
    onCellLink () {
      this.$emit('cellLink', ...arguments)
    },
    getCellClassOrStyle (styleOrClassValue, row) {
      if (styleOrClassValue) {
        if (_.isFunction(styleOrClassValue)) {
          return styleOrClassValue(row)
        } else {
          return styleOrClassValue
        }
      }
      return null
    },
    getColumnWidthObject (column, columns, idx) {
      // 要把行的左边边框和右边边框去除掉
      let trimBorderWidth = idx === 0 || idx === columns.length - 1 ? 1 : 0
      let width = _.isNumber(column.width) ? `${column.width - trimBorderWidth}px` : _.isNumber(column.calWidth) ? `${column.calWidth - trimBorderWidth}px` : 0
      return {
        width,
        minWidth: width || 0,
        maxWidth: width || undefined
      }
    },
    getKey (item, idx) {
      return this.rowKeyPropName ? _.get(item, this.rowKeyPropName) : idx
    },
    onRowClick (evt, row) {
      if (this.selection !== 'none') {
        this.$set(row, 'selected', this.toggleSelection ? !row.selected : true)
        let selected = []
        for (let item of this.items) {
          if (this.selection === 'single' && item !== row) {
            this.$set(item, 'selected', false)
          } else {
            if (item.selected) {
              selected.push(item)
            }
          }
        }
        // 如果单选，则返回一个对象或者null
        this.$emit('select', this.selection === 'single' ? (selected.length > 0 ? selected[0] : null) : selected)
      }
      this.$emit('rowClick', row, evt)
    },
    onRowDbClick (row) {
      this.$emit('rowDbClick', row)
    },
    scrollToRow (row) {
      let rowDom = document.getElementById(`grid_table_${this.count}_${this.getKey(row)}`)
      let contDom = this.$refs.tableContent
      if (rowDom && contDom) {
        Utils.scrollIntoView(rowDom)
      }
    },
    scrollToCurrentRow () {
      let selectedRow = _.find(this.items, e => e.selected)
      if (selectedRow) {
        this.scrollToRow(selectedRow)
      }
    },
    scrollCurrentRowIntoView () {
      let selectedRow = _.find(this.items, e => e.selected)
      if (selectedRow) {
        let rowDom = document.getElementById(`grid_table_${this.count}_${this.getKey(selectedRow)}`)
        rowDom.scrollIntoView && rowDom.scrollIntoView({ block: 'center', inline: 'center' })
      }
    },
    // 主动调用选择时，不触发 select 事件，此处可以选择多个（不管selection的模式）
    select (rowOrFilter, noScroll) {
      let isFilter = _.isFunction(rowOrFilter)
      let firstMatch = null
      for (let item of this.items) {
        let match = (isFilter && rowOrFilter(item)) || (!isFilter && item === rowOrFilter)
        if (match) {
          if (!noScroll) {
            if (!firstMatch) {
              firstMatch = item
              this.scrollToRow(item)
            }
          }
        }
        this.$set(item, 'selected', match)
      }
    }
  },
  created () {
    this.onCellRenderCompleted = _.debounce(() => {
      this.checkScrollbar()
      this.$emit('cellRenderCompleted')
    }, 200)
  },
  mounted () {
    this.checkScrollbarImmediate = () => {
      let hasScrollbar = false
      if (this.$refs.tableContent) {
        let h = this.$refs.tableContent.offsetHeight
        // let bt = this.$refs.tableContent.style.borderTop.match('[0-9]+')
        // bt = bt && +bt[0] || 0
        // let bb = this.$refs.tableContent.style.borderBottom.match('[0-9]+')
        // bb = bb && +bb[0] || 0
        if (this.$refs.tableContent.scrollHeight > h) {
          hasScrollbar = true
        }
        // 为了刷新宽的计算，不加的话，宽度计算会有问题，有待进一步研究原因 TODO
        this.$refs.tableContent.style.position = this.$refs.tableContent.style.position ? '' : 'relative'
      }
      this.hasScrollbar = hasScrollbar
      this.initColumnWidthObject()
    }
    this.checkScrollbar = _.debounce(() => {
      this.checkScrollbarImmediate()
    }, 100)
    Utils.ResizeEvent.addResizeListener(this.$refs.table, this.checkScrollbar)
    this.$nextTick(() => {
      this.checkScrollbarImmediate()
    })
  },
  watch: {
    items () {
      this.checkScrollbar()
    },
    columns () {
      this.checkScrollbar()
    }
  },
  beforeDestroy () {
    this.$refs.table && Utils.ResizeEvent.removeResizeListener(this.$refs.table, this.checkScrollbar)
  }
}
</script>
