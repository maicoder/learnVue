export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'wangqu')
      })
    }
  },
  getters: {
    fullName(state) {
      return state.name + '1111'
    },
    fullName2(state, getters) {
      return getters.fullName + '2222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}
