<script>
import { mapActions } from 'vuex'
import Look from '@/components/look.vue'
// import LookDashboard from '@/components/look-dashboard.vue'
import LookHeader from '@/components/look-header.vue'

export default {
  name: 'HomePage',
  components: {
    LookHeader,
    Look,
    // LookDashBoard,
  },
  data() {
    return {
      user: null,
    }
  },
  async created() {
    // this.look = await this.fetchLook(this.$store.state.look)
    // console.log('look', this.look)
    this.user = await this.fetchUser(this.$store.state.user._id)
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
}
</script>

<template lan="pug">
  <div class="home">
    <div class="content">
      <look-header :userName="user.name" />
      <look />
      <!-- <look-dashboard :look="look" /> -->
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
