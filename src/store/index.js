import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasSavedGame: false,
    cards: [],
  },
  getters: {
    hasSavedGame(state) {
      return state.hasSavedGame
    },
    cards(state) {
      return state.cards
    },
  },
  mutations: {
    /**
     * Mutation that sets cards' array
     * @param {Object} state Application state
     * @param {Array} cards New cards array
     */
    setCards(state, cards) {
      state.cards = cards
      console.log(state.cards)
    },
  },
  actions: {
    setCards({ commit }, cards) {
      commit('setCards', cards)
    },
  },
  modules: {},
})
