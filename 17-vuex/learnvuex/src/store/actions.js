import {UPDATEINFO} from "./mutations-types";

export default {
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     // console.log(payload);
  //     console.log(payload.message);
  //     payload.success();
  //     // payload();
  //   },1000)
  // }

  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(UPDATEINFO)
        console.log(payload);

        resolve('111111')
      },1000)
    })
  }
}
