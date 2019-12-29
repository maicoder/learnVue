import {
  ADDSTUDENT,
  DECREMENT,
  INCREMENT, INCREMENTCOUNT, UPDATEINFO
} from "./mutations-types";

export default {
    // 方法
    // increment(state) {
    //   state.counter++
    // },
    [INCREMENT](state) {
    state.counter++
  },
    [DECREMENT](state) {
    state.counter--
  },
    [INCREMENTCOUNT](state, payload) {
    // console.log(count);
    state.counter += payload.count
  },
    [ADDSTUDENT](state, stu) {
    state.students.push(stu)
  },
    [UPDATEINFO](state) {
      state.info.name = 'why'
    // state.info.name = 'Vuex'
    // state.info['address'] = 'Los Angeles'

    // Vue.set(state.info, 'address', 'Los Angeles')

    // delete state.info.age
    // Vue.delete(state.info, 'age')

    // 错误代码
    // setTimeout(() => {
    //   state.info.name = 'why'
    // }, 1000)
  }
}
