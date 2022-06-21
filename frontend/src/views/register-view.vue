<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'RegisterView',
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
      label(for="name") Name
        br
        input(v-model="name" id="name" type="text" placeholder="Johnson Doe" required)
      //- label(for="lastName") LastName:&nbsp;
      //-   input(v-model="lastName" id="lastName" type="text" placeholder="Your last name" required)
      label(for="email") Email
        br
        input(v-model="email" id="email" type="email" placeholder="johnsondoe@nomail.com" required)
      label(for="password") Password
        br
        input(v-model="password" id="password" type="password" minlength="8" placeholder="********" required)
      input(type="submit" value="Continue" class="btn-submit")
    div(v-if="backendError") {{ backendError }}
    //- div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
.register {
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
