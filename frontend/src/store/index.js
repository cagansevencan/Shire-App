import { createStore } from 'vuex'
import Vue from 'vue'
import Vuex from 'vuex'

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default new Vuex.Store({
  state: {
    countHome: 0,
    countAbout: 0
  },
  getters: {
  },
  mutations: {
    [Mutations.INCREMENT](state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT](state, type) {
      // if (type === 'countHome' && state.countHome === 0) {
      //   return alert('Count cannot be less than 0')
      // } else if (type === 'countAbout' && state.countAbout === 0) {
      //   return alert('Count cannot be less than 0')
      // } else {
      // dont let it go below 0
      if (state[type] === 0) return alert('Count cannot be less than 0')
      type === 'countHome' ? state.countHome-- : state.countAbout--
      // }

    }
  },
  actions: {
    increment({ commit }, type) {
      commit(Mutations.INCREMENT, type)
    },
    decrement({ commit }, type) {
      commit(Mutations.DECREMENT, type)
    },
    async fetchBusinesses() {
      return [{ name: 'Business 1' }, { name: 'Business 2' }]
    }
  }
})
