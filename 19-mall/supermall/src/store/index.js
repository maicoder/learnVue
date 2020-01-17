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
    // mutations 唯一的目的就是修改 state 中状态
    // mutations 中的每一个方法尽可能完成的事件比较单一一点
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      state.carList.push(payload);
    }
  },
  methods: {
    // addCart(state, payload) {
    //   // payload 新添加的商品
    //   // let oldProduct = null;
    //   // for (let item of state.cartList) {
    //   //   if (item.iid === payload.iid) {
    //   //     oldProduct = item;
    //   //   }
    //   // }
    //
    //   // let oldProduct = state.carList.find(item => item.iid === payload.iid);
    //
    //   // 2. 判断 oldProduct
    //   // if (oldProduct) {
    //   //   oldProduct.count += 1;
    //   // } else {
    //   //   payload.count = 1;
    //   //   state.carList.push(payload);
    //   // }
    // }
    addCart(context, payload) {
      let oldProduct = context.state.carList.find(item => item.iid === payload.iid);

      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit('addCounter', oldProduct);
      } else {
        payload.count = 1;
        // context.state.carList.push(payload);
        context.commit('addToCart', payload);
      }
    }
  }
})

// 3. 挂载 Vue 实例上
export default store;
