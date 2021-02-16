import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasSavedGame: false,
  },
  getters: {
    hasSavedGame(state) {
      return state.hasSavedGame
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
