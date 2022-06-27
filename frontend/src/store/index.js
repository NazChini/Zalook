import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//function to get our individual socket
// import io from 'socket.io-client'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

//is this socket initialization?
//pass it to the url of our local server, in parameter pass in port name?
// const socket = io(process.env.VUE_APP_BASE_URL)

// socket.on('connect', () => {
//   console.log('connection established!')
// })

const mutations = {
  SET_USER: 'set user',
  // SET_LIVE_STREAM: 'set live stream',
  // ADD_LIVE_STREAM: 'add live stream',
  // ADD_MESSAGE_TO_LIVE_STREAM: 'add message to live stream',
}

const store = new Vuex.Store({
  state: {
    user: null,
    look: null,
    // currentLiveStream: null,
    // liveStreams: [],
    // liveStreamMessages: [],
  },
  getters: {},
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    },
    // [mutations.SET_LIVE_STREAM](state, live) {
    //   state.currentLiveStream = live
    // },
    // [mutations.ADD_LIVE_STREAM](state, stream) {
    //   state.liveStreams.push(stream)
    // },
    // [mutations.ADD_MESSAGE_TO_LIVE_STREAM](state, message) {
    //   state.liveStreamMessages.push(message)
    // },
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
    async fetchLook(store, id) {
      const lookRequest = await axios.get(`/api/looks/${id}/json`)
      return lookRequest.data
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
    // async goLive({ state, commit }) {
    //   socket.emit('go live', state.user._id, () => {
    //     commit(mutations.SET_LIVE_STREAM, state.user._id)
    //   })
    // },
    // async addLiveStream({ commit }, stream) {
    //   commit(mutations.ADD_LIVE_STREAM, stream)
    // },
    // async sendMessageToLiveStream({ state, commit }, body) {
    //   const message = {
    //     body,
    //     author: state.user.firstName,
    //   }
    //   commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
    //   socket.emit('new message', state.currentLiveStream, message)
    // },
    // async joinStream({ commit }, stream) {
    //   //emit: send info/event to server from client
    //   socket.emit('join stream', stream)
    //   commit(mutations.SET_LIVE_STREAM, stream)
    // },
  },
  modules: {},
})

//listen for events, socket is event based
// socket.on('new live stream', user => {
//   store.dispatch('addLiveStream', user)
// })

// socket.on('new live stream message', message => {
//   store.commit(mutations.ADD_MESSAGE_TO_LIVE_STREAM, message)
// })

export default async function init() {
  //seeing state the first thing that starts the application on the FE - whether user is logged in or not by fetching current session
  await store.dispatch('fetchSession')
  return store
}
