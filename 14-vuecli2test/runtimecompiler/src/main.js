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


// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtimeonly(v2) (1.性能更高  2.下面代码量更少)
// render -> vdom -> UI
