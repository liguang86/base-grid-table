import Vue from 'vue'
import App from './App.vue'

require('../packages/base-grid-table/src/css/base-grid-table.styl')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
