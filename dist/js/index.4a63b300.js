(function(t){function e(e){for(var o,r,c=e[0],a=e[1],s=e[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],o=!0,c=1;c<n.length;c++){var a=n[c];0!==i[a]&&(o=!1)}o&&(l.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={index:0},l=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=a;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("e35a")},3433:function(t,e,n){},c90f:function(t,e,n){"use strict";var o=n("d814"),i=n.n(o);i.a},d814:function(t,e,n){},e35a:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",[t._v("示例")]),n("base-grid-table",{attrs:{"row-key-prop-name":"id",columns:t.columns,"is-full-row":t.isFullRow,"full-row-config":t.fullRowConfig,items:t.items}})],1)},l=[],r=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"table",staticClass:"base-grid-table"},[n("div",{staticClass:"base-grid-table-header",style:t.hasScrollbar?{"padding-right":t.getScrollbarWidth()+"px"}:null},t._l(t.columns,(function(e,o){return n("div",{key:e.field,class:[e.headerClass],style:[t.columnWidthObjList[o],e.headerStyle]},[e.headerComponent?n(e.headerComponent,{tag:"div"}):[t._v(" "+t._s(e.headerName)+" ")]],2)})),0),t.items&&t.items.length>0?n("div",{key:"1",ref:"tableContent",staticClass:"base-grid-table-content"},t._l(t.items,(function(e,o){return n("div",{key:t.getKey(e,o),class:["base-grid-table-row",{selected:e.selected},t.getRowClass&&t.getRowClass(e),t.isFullRow&&t.isFullRow(e)?"base-grid-table-full-row":null],style:{visible:t.columnWidthObjList.length?"visible":"hidden"},attrs:{id:"grid_table_"+t.count+"_"+t.getKey(e,o)},on:{dblclick:function(n){return t.onRowDbClick(e)},click:function(n){return t.onRowClick(n,e)}}},[t.isFullRow&&t.isFullRow(e)?n("base-grid-table-template-full-row",{attrs:{row:e,config:t.fullRowConfig}}):t._l(t.columns,(function(o,i){return n("div",{key:o.field,class:[t.getCellClassOrStyle(o.cellClass,e)],style:[t.columnWidthObjList[i],t.getCellClassOrStyle(o.cellStyle,e)]},[n(t.cellComponent,{tag:"div",attrs:{column:o,row:e},on:{cellRenderCompleted:t.onCellRenderCompleted,cellLink:t.onCellLink}})],1)}))],2)})),0):n("div",{key:"2",staticClass:"no-data"},[t._v(" "+t._s(t.noDataTip)+" ")])])}),c=[],a=(n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("7db0"),n("c975"),n("fb6a"),n("d3b7"),n("8a79"),n("3ca3"),n("5319"),n("159b"),n("ddb0"),n("5a15")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-grid-table-cell"},[n("div",{ref:"cell"},[t.column.template||t.column.cellComponent?t._e():[t._v(" "+t._s(t.textValue)+" ")]],2)])},u=[],d=(n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("ade3")),f=n("2ef0"),h=n.n(f);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(d["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={props:{column:{required:!0},row:{required:!0}},data:function(){return{}},methods:{},mounted:function(){var t=this,e=function(){var e=t;if(e.cellComponent&&(e.cellComponent&&e.cellComponent.$destroy(),e.cellComponent=null),e.column.cellComponent){var n=e.column.cellComponent;e.cellComponent=new n({el:e.$refs.cell,store:e.$store,router:e.$router,data:{data:e.row},mounted:function(){e.$nextTick((function(){e.$emit("cellRenderCompleted")}))}})}else e.column.template?e.cellComponent=new o["a"]({el:e.$refs.cell,store:e.$store,components:e.column.templateComponents||{},beforeCreate:function(){var t=this;if(this.$options.template=e.column.template,e.column.context){var n={};h.a.forOwn(e.column.context,(function(e,o){h.a.isFunction(e)?"mounted"!==e&&(t.$options.methods[o]=e):n[o]=e})),this.$options.data=function(){return p({data:e.row},n)}}else this.$options.data=function(){return{data:e.row}}},mounted:function(){e.column.context&&e.column.context.mounted&&e.column.context.mounted.apply(this),e.$nextTick((function(){e.$emit("cellRenderCompleted")}))}}):e.$nextTick((function(){e.$emit("cellRenderCompleted")}))};this.initCellDebounce=h.a.debounce((function(){e()}),200),e()},computed:{fieldValue:function(){return this.column.field?h.a.get(this.row,this.column.field):null},textValue:function(){var t;return t=this.column.cellRenderer?this.column.cellRenderer(this.fieldValue,this.row,this.column):this.fieldValue,t}},beforeDestroy:function(){this.cellComponent&&this.cellComponent&&this.cellComponent.$destroy()},watch:{column:function(){this.initCellDebounce()},row:function(){this.cellComponent&&(this.cellComponent.data=this.row)}}},w=b,g=n("2877"),v=Object(g["a"])(w,s,u,!1,null,null,null),y=v.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"row"})},W=[];function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(d["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $={props:{config:{required:!0},row:{required:!0}},data:function(){return{}},methods:{initRow:function(){var t=this;if(t.rowComponent&&(t.rowComponent&&t.rowComponent.$destroy(),t.rowComponent=null),t.config.rowComponent){var e=t.config.rowComponent;t.rowComponent=new e({el:t.$refs.row,data:{data:t.row}})}else t.config.template&&(t.rowComponent=new o["a"]({el:t.$refs.row,components:t.config.templateComponents||{},beforeCreate:function(){var e=this;if(this.$options.template=t.config.template,t.config.context){var n={};h.a.forOwn(t.config.context,(function(t,o){h.a.isFunction(t)?e.$options.methods[o]=t:n[o]=t})),this.$options.data=function(){return x({data:t.row},n)}}else this.$options.data=function(){return{data:t.row}}}}))}},mounted:function(){this.initRow()},beforeDestroy:function(){this.rowComponent&&this.rowComponent&&this.rowComponent.$destroy()},watch:{config:function(){this.initRow()},row:function(){this.rowComponent&&(this.rowComponent.data=this.row)}}},j=$,R=Object(g["a"])(j,C,W,!1,null,null,null),k=R.exports,S=0,_=24,P={name:"BaseGridTable",components:{BaseGridTableTemplateFullRow:k},props:{cellComponent:{default:function(){return y}},columns:{required:!0},items:{default:function(){return[]}},rowKeyPropName:{type:String},noDataTip:{default:function(){return"暂无数据"}},selection:{default:function(){return"single"},validator:function(t){return["single","none","multiple"].indexOf(t)>-1}},toggleSelection:{default:function(){return!0}},getRowClass:{type:Function},isFullRow:{type:Function},fullRowConfig:{default:function(){return null}}},data:function(){return{hasScrollbar:!1,count:++S,columnWidthObjList:[]}},methods:{getScrollbarWidth:a["a"].getScrollbarWidth,calWidthForCols:function(t,e){if(t&&t.length){var n=e,o=0,i=[],l=[];if(h.a.forEach(t,(function(t){if(t.calWidth=0,(!t.minWidth||t.minWidth<_)&&(t.minWidth=_),h.a.isNumber(t.width))t.minWidth&&t.width<t.minWidth?t.calWidth=t.minWidth:t.maxWidth&&t.width>t.maxWidth?t.calWidth=t.maxWidth:t.calWidth=t.width,n-=t.calWidth;else if(h.a.isString(t.width)&&t.width.endsWith("%")){var r=+t.width.replace("%","")||0;if(r){var c=Math.floor(r*e/100);t.maxWidth&&t.maxWidth<c?c=t.maxWidth:t.minWidth&&t.minWidth>c&&(c=t.minWidth),t.calWidth=c,n-=t.calWidth}else l.push(t)}else h.a.isNumber(t.flex)&&t.flex?(o+=t.flex,i.push(t)):l.push(t)})),n>0&&o>0){var r=o,c=function t(e){var o=[];h.a.forEach(e,(function(t){var e=Math.floor(t.flex/r*n),i=!1;t.maxWidth&&e>t.maxWidth?(e=t.maxWidth,i=!0):t.minWidth&&e<t.minWidth&&(e=t.minWidth,i=!0),i?(t.calWidth=e,r-=t.flex,n-=e):o.push(t)})),o.length!==e.length&&o.length>=2&&t(o)};c(i),h.a.forEach(i,(function(t){if(!t.calWidth){var e=Math.floor(t.flex/r*n);t.calWidth=e,r-=t.flex,n-=e}}))}if(n>0&&l.length){var a=l.length,s=function t(e){var o=[];h.a.forEach(e,(function(t){var e=Math.floor(n/a),i=!1;t.maxWidth&&e>t.maxWidth?(e=t.maxWidth,i=!0):t.minWidth&&e<t.minWidth&&(e=t.minWidth,i=!0),i?(t.calWidth=e,a--,n-=e):o.push(t)})),o.length!==e.length&&o.length>=2&&t(o)};s(l),a&&h.a.forEach(l,(function(t){if(!t.calWidth){var e=Math.floor(n/a);t.calWidth=e,n-=e,a--}}))}if(n>0)for(var u=t.length-1;u>-1;u--){if(!t[u].maxWidth){t[u].calWidth+=n;break}var d=t[u].calWidth+n;if(!(d>t[u].maxWidth)){t[u].calWidth=d;break}n=d-t[u].maxWidth,t[u].calWidth=t[u].maxWidth}else h.a.forEach(t,(function(t){t.calWidth<_&&(t.calWidth=_)}))}},initColumnWidthObject:function(){if(this.$refs.table){var t=this.$refs.table.offsetWidth-2-(this.hasScrollbar?this.getScrollbarWidth():0);this.calWidthForCols(this.columns,t);for(var e=[],n=0;n<this.columns.length;n++){var o=this.columns[n];e.push(this.getColumnWidthObject(o,this.columns,n))}this.columnWidthObjList=e}},onCellLink:function(){this.$emit.apply(this,["cellLink"].concat(Array.prototype.slice.call(arguments)))},getCellClassOrStyle:function(t,e){return t?h.a.isFunction(t)?t(e):t:null},getColumnWidthObject:function(t,e,n){var o=0===n||n===e.length-1?1:0,i=h.a.isNumber(t.width)?"".concat(t.width-o,"px"):h.a.isNumber(t.calWidth)?"".concat(t.calWidth-o,"px"):0;return{width:i,minWidth:i||0,maxWidth:i||void 0}},getKey:function(t,e){return this.rowKeyPropName?h.a.get(t,this.rowKeyPropName):e},onRowClick:function(t,e){if("none"!==this.selection){this.$set(e,"selected",!this.toggleSelection||!e.selected);var n=[],o=!0,i=!1,l=void 0;try{for(var r,c=this.items[Symbol.iterator]();!(o=(r=c.next()).done);o=!0){var a=r.value;"single"===this.selection&&a!==e?this.$set(a,"selected",!1):a.selected&&n.push(a)}}catch(s){i=!0,l=s}finally{try{o||null==c.return||c.return()}finally{if(i)throw l}}this.$emit("select","single"===this.selection?n.length>0?n[0]:null:n)}this.$emit("rowClick",e,t)},onRowDbClick:function(t){this.$emit("rowDbClick",t)},scrollToRow:function(t){var e=document.getElementById("grid_table_".concat(this.count,"_").concat(this.getKey(t))),n=this.$refs.tableContent;e&&n&&a["a"].scrollIntoView(e)},scrollToCurrentRow:function(){var t=h.a.find(this.items,(function(t){return t.selected}));t&&this.scrollToRow(t)},scrollCurrentRowIntoView:function(){var t=h.a.find(this.items,(function(t){return t.selected}));if(t){var e=document.getElementById("grid_table_".concat(this.count,"_").concat(this.getKey(t)));e.scrollIntoView&&e.scrollIntoView({block:"center",inline:"center"})}},select:function(t,e){var n=h.a.isFunction(t),o=null,i=!0,l=!1,r=void 0;try{for(var c,a=this.items[Symbol.iterator]();!(i=(c=a.next()).done);i=!0){var s=c.value,u=n&&t(s)||!n&&s===t;u&&(e||o||(o=s,this.scrollToRow(s))),this.$set(s,"selected",u)}}catch(d){l=!0,r=d}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}}},created:function(){var t=this;this.onCellRenderCompleted=h.a.debounce((function(){t.checkScrollbar(),t.$emit("cellRenderCompleted")}),200)},mounted:function(){var t=this;this.checkScrollbarImmediate=function(){var e=!1;if(t.$refs.tableContent){var n=t.$refs.tableContent.offsetHeight;t.$refs.tableContent.scrollHeight>n&&(e=!0),t.$refs.tableContent.style.position=t.$refs.tableContent.style.position?"":"relative"}t.hasScrollbar=e,t.initColumnWidthObject()},this.checkScrollbar=h.a.debounce((function(){t.checkScrollbarImmediate()}),100),a["a"].ResizeEvent.addResizeListener(this.$refs.table,this.checkScrollbar),this.$nextTick((function(){t.checkScrollbarImmediate()}))},watch:{items:function(){this.checkScrollbar()},columns:function(){this.checkScrollbar()}},beforeDestroy:function(){this.$refs.table&&a["a"].ResizeEvent.removeResizeListener(this.$refs.table,this.checkScrollbar)}},D=P,E=Object(g["a"])(D,r,c,!1,null,null,null),F=E.exports;F.install=function(t){t.component(F.name,F)};var N=F,T={name:"app",components:{BaseGridTable:N},data:function(){var t=this;return{stateNames:["状态1","状态2","状态3"],columns:[{field:"state",headerName:"状态(自定义组件)",width:120,cellComponent:o["a"].extend({template:'\n              <span class="cell-state">\n                {{stateName}}\n              </span>',computed:{stateName:function(){return t.stateNames[this.data.state]||"未知"}}})},{field:"state2",headerName:"状态（自定义格式化）",flex:1,cellRenderer:function(e,n){return t.stateNames[e]||"未知"}},{field:"col1",headerName:"列1",width:160},{field:"col2",headerName:"列2",width:"10%"},{field:"col3",headerName:"列3",flex:3,cellStyle:{textAlign:"center"},headerStyle:{textAlign:"center"}}],items:[{id:1,state:0,col1:"列1的值",col2:"列2的值",col3:"列3的值"},{id:2,isFullRow:!0},{id:3,state:0,col1:"列1的值",col2:"列2的值",col3:"列3的值"}],fullRowConfig:{rowComponent:o["a"].extend({template:'<div class="full-row"><p>这是一整行</p></div>'})}}},methods:{isFullRow:function(t){return t.isFullRow}}},L=T,I=(n("c90f"),Object(g["a"])(L,i,l,!1,null,null,null)),M=I.exports;n("3433"),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(M)}}).$mount("#app")}});