import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// render -> vdom -> UI

// 那么 .vue 文件中的 template 是由谁处理的？
// 是用 vue-template-compiler 依赖处理的
