import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
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
      context.commit(ADD_COUNTER, oldProduct);
    } else {
      payload.count = 1;
      // context.state.carList.push(payload);
      context.commit(ADD_TO_CART, payload);
    }
  }
}
