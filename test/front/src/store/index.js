import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: ''
  },
  mutations: {
    accountSave(state, a) {
      state.account = a
    }
  },
  actions: {},
  modules: {}
})
