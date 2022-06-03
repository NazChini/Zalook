<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
// import Board from '../components/board'
// import Card from '../components/card'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  components: {
    // Board,
    // Card,
  },
  data() {
    return {
      users: [],
      time: new Date(),
      message: '',
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    },
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages']),
  },
}
</script>

<style scoped>
.flexbox {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 768px;
  height: 100vh;

  margin: 0 auto;
  padding: 15px;
}

/* .flexbox:first-child {
  width: 30%;
} */
</style>

<template lang="pug">
  .home 
    //- h1 zalook 
    //-   span(v-if="user") {{ user.firstName }}
    
    //- main.flexbox
    //-   Board#board-1
    //-     Card#card-1(draggable="true")
    //-       p Card 1
      
    //-   Board#board-2
    //-     Card#card-2(draggable="true")
    //-       p Card 2
    h2 Users
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{user.firstName}}
    div(v-if="liveStreams.length")
      h2 Live streams
      div(v-for="stream in liveStreams")
        p {{ stream }}
        button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Go live
    div(v-if="currentLiveStream")
      h3 Live stream
      .messages
        .message(v-for="message in liveStreamMessages")
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit="sendMessage")
        input(type="text" v-model="message")
        input(type="submit" value="Send message")
</template>
