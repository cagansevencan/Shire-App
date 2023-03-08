import { createStore } from 'vuex'

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default createStore({
  state: {
    count: 0,
    countHome: 0,
    countAbout: 0
  },
  getters: {
  },
  mutations: {
    [Mutations.INCREMENT](state, type) {
      if (type === 'countHome') {
        console.log('countHome')
        state.countHome++
      }
      else if (type === 'countAbout') {
        state.countAbout++
      }
      // type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT](state, type) {
      // if (type === 'countHome' && state.countHome === 0) {
      //   return alert('Count cannot be less than 0')
      // } else if (type === 'countAbout' && state.countAbout === 0) {
      //   return alert('Count cannot be less than 0')
      // } else {
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
    }
  }
})
