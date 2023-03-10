import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default createStore({
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
      const request = await axios.get('/businesses')
      return request.data
    }
  }
})
