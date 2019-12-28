import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10},
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    // increment(state) {
    //   state.counter++
    // },
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // console.log(count);
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
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
  },
  actions: {
    aUpdateInfo(context, payload) {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);
      },1000)
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgestu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

// 3.导出 store 对象
export default store
