<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      time: new Date(),
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers', 'logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<template lang="pug">
  .container
    #nav
      router-link(to="/profile") Profile
      router-link(to="/login") Login
      router-link(to="/register") Register
      a(@click="doLogout" href="#") Logout
    
    .user-list 
      h1 zalook
      p The time is: {{ time }}
      h2 Users
      div(v-for="user in users")
        router-link(:to="`/users/${user._id}`") {{user.firstName}}
    
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
