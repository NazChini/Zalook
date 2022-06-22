<script>
import { mapActions } from 'vuex'
// import Look from '@/components/look.vue'
// import LookControls from '@/components/look-controls.vue'
// import LookHeader from '@/components/look-header.vue'

export default {
  name: 'HomePage',
  components: {
    // LookHeader,
    // Look,
    // LookControls,
  },
  // data() {
  //   return {
  //     user: this.$store.state.user || null,
  //   }
  // },
  // async created() {
  //   this.user = await this.fetchUser(this.$route.params.id)
  // },
  methods: {
    // ...mapActions(['fetchUser']),
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<template lan="pug">
  <div class="home">
    <div class="content">
      <!-- <look-header :user="user" v-if="user" /> -->
      <h1>Hello</h1>
      <a @click="doLogout" href="#">Logout</a>

      <!-- <look /> -->
      <!-- <look-controls /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  look-header {
    margin: 3em 0;
  }
}
look {
  width: 90%;
}
</style>
