import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   // url: 'httpbin.org'
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })

import {request} from "./network/request";

// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//
//   },
//   failure: function (err) {
//
//   }
// })

// request({
//   url: 'http://123.207.32.32:8000'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

request({
  url: '/home/multidata'
}, res => {
  console.log(res);
})
