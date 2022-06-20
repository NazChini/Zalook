<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitRegister(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
.register
    form( @submit="submitRegister") 
      label(for="name") name:&nbsp;
        input(v-model="name" id="name" type="text" placeholder="Your name" required)
      //- label(for="lastName") LastName:&nbsp;
      //-   input(v-model="lastName" id="lastName" type="text" placeholder="Your last name" required)
      label(for="email") Email:&nbsp;
        input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password" minlength="8" placeholder="Your password" required)
      input(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    //- div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
// label {
//   display: block;
//   margin: 1rem 0;
// }
</style>
