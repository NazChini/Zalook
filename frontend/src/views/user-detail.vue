<script>
// @ is an alias to /src
import UserCard from '@/components/user-card'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: {
    UserCard,
  },
  data() {
    return {
      user: null,
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
}
</script>

<template lang="pug">
  .about 
    h1 User Detail
    UserCard(:user="user" v-if="user")
</template>
