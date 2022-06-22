<script>
// import { mapActions } from 'vuex'
export default {
  name: 'App',
  // methods: {
  //   ...mapActions(['logout']),
  //   async doLogout() {
  //     await this.logout()
  //     this.$router.push('/login')
  //   },
  // },
}
</script>

<template lang="pug">
  #app
    //- #nav
    //-   router-link(to="/profile") Profile
    //-   router-link(to="/login") Login
    //-   router-link(to="/register") Register
    //-   a(@click="doLogout" href="#") Logout
    //-   <button type="button" class="btn btn-primary">Primary</button>
    router-view
</template>

<style lang="scss">
@import './assets/styles/reset.scss';
#app {
  background-color: #fff;
}
</style>
