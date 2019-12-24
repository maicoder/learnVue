import Vue from 'vue'
import App from './App'
import router from './router'   // router 是文件夹，会自动查找 index 文件，所以可以忽略不写

Vue.config.productionTip = false

// Vue.prototype.test = function () {
//   console.log('test');
// }

// Vue.prototype.name = 'codermy'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);
