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
      // payload 新添加的商品
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item;
      //   }
      // }

      // let oldProduct = state.carList.find(item => item.iid === payload.iid);

      // 2. 判断 oldProduct
      // if (oldProduct) {
      //   oldProduct.count += 1;
      // } else {
      //   payload.count = 1;
      //   state.carList.push(payload);
      // }
    }
  }
})

// 3. 挂载 Vue 实例上
export default store;
