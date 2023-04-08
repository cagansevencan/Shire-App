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
    },
    async fetchBusiness(ctx, businessID) {
      const request = await axios.get(`/businesses/${businessID}`)
      return request.data
    },
    async fetchNearbyBusinesses(ctx, { lat, lng }) {
      const request = await axios.get(`/businesses/nearby/?lng=${lng}&lat=${lat}`)
      return request.data
    },
    async fetchBusinessLocations(ctx, locationID) {
      const request = await axios.get(`/location/${locationID}`)
      return request.data
    },
    async fetchUsers() {
      const request = await axios.get('/users')
      return request.data
    },
    async fetchUser(ctx, userID) {
      const request = await axios.get(`/users/${userID}`)
      return request.data
    },
    async createBusiness({ dispatch }, { userID, name, description, email, location }) {
      try {
        const request = await axios.post(`/businesses/${userID}/create`,
          { name, description, email, location }
        )
        await dispatch('fetchBusinesses')
        return request.data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
