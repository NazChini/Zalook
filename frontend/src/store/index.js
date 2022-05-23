import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import io from 'socket.io-client'

Vue.use(Vuex)

//is this socket initialization?
const socket = io()

socket.on('hello world!', () => {
  console.log('we received message from the websocket server!')
})

const mutations = {
  SET_USER: 'set user',
}

const store = new Vuex.Store({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    },
  },
  actions: {
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}/json`)
      return userRequest.data
    },
    async fetchUsers() {
      const usersRequest = await axios.get(`/api/users`)
      return usersRequest.data
    },
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      // eslint-disable-next-line no-useless-catch
      try {
        const user = await axios.post('/api/account/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },
  },
  modules: {},
})

export default async function init() {
  //seeing state the first thing that starts the application on the FE - whether user is logged in or not by fetching current session
  await store.dispatch('fetchSession')
  return store
}
