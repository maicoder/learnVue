// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// render 函数
// render: function (createElement) {
//   1.普通用法: createElement('标签', {标签的属性}, [''])
//   return createElement('h2', {class: 'box'}, ['Hello World'])
// }

// render: function (createElement) {
//   1.createElement('标签', {标签的属性}, [''])
//   return createElement('h2', {class: 'box'}, ['Hello World', createElement('button', ['按钮'])])
// }

// 2.传入组件对象
// const cpn = {
//   template: <div>{{message}}</div>,
//   data() {
//     return {
//       message: '我是组件message'
//     }
//   }
// }
// createElement(cpn)

// 再进化成 runtimeonly
// createElement(App)

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtimeonly(v2) (1.性能更高  2.下面代码量更少)
// render -> vdom -> UI
