<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password,
        })

        // if its a successful login, redirects to profile page
        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
//- stores user data as local state and passes it to login action (above in methods)
.login
    form(@submit="submitLogin")
      
      label(for="email") Email
        br
        input(v-model="email" id="email" type="email" placeholder="johnsondoe@nomail.com" required)
      label(for="password") Password
        br
        input(v-model="password" id="password" type="password" minlength="8" placeholder="********" required)
      input(type="submit" value="Log in" class="btn-submit")
    div(v-if="backendError") {{ backendError }}
    //- div Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss" scoped>
.login {
  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 0.75rem;
      display: block;
      margin: 1.8em 0;
    }

    input {
      width: 100%;

      font-size: 1rem;
      color: #ada7a7;
      border-bottom: 0.2px solid #ada7a7;
    }

    .btn-submit {
      background-color: #000;
      padding: 0.8em 2.2em;
      border-radius: 0.75em;
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      cursor: pointer;

      font-weight: 500;
      color: #fff;
    }

    .btn-submit:hover,
    .btn-submit:focus {
      background-color: #df6951;
      color: #fff;
    }

    @media only screen and (min-width: 990px) {
      label {
        font-size: 1rem;
      }

      input {
        font-size: 1.5rem;
      }

      .btn-submit {
        width: 60%;
        margin-top: 1em;
        align-self: center;
      }
    }
  }
}
</style>
