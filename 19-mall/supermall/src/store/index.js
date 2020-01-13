import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2. 创建 Store 对象
const store = new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCart(state, payload) {
      state.carList.push(payload)
    }
  }
})

// 3. 挂载 Vue 实例上
export default store;
