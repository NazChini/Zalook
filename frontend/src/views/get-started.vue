<script>
import ZalookLogo from '../components/blocks/zalook-logo.vue'
import SlideShow from '../components/blocks/slide-show.vue'
import RegisterView from './register-view'
import LoginView from './login-view'

export default {
  name: 'GetStarted',
  components: {
    ZalookLogo,
    SlideShow,
    RegisterView,
    LoginView,
  },
  data() {
    return {
      isNewUser: true,
    }
  },
  methods: {
    renderLoginView() {
      this.isNewUser = false
    },
    renderRegisterView() {
      this.isNewUser = true
    },
  },
}
</script>

<template>
  <div id="get-started-container">
    <main>
      <zalook-logo />
      <div class="flex">
        <div class="container">
          <div class="get-started-header">
            <p :class="{ highlightText: !isNewUser }" class="login" @click="renderLoginView">Login</p>
            <p :class="{ highlightText: isNewUser }" class="register" @click="renderRegisterView">Sign Up</p>
          </div>
          <register-view v-if="isNewUser" />
          <login-view v-else />
          <!-- <p class="already-registered" @click="renderLoginView">
        Already Registered?
      </p> -->
        </div>
      </div>
    </main>
    <slide-show direction="up" />
    <slide-show class="big-screen" direction="down" />
  </div>
</template>

<style lang="scss" scoped>
#get-started-container {
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  zalook-logo {
    margin: 0 auto;
  }

  main {
    width: 60%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;

    @media only screen and (min-width: 990px) {
      max-width: 40%;
    }

    .get-started-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 0.2em 0;
      margin-bottom: 1em;

      border-bottom: 0.5px solid rgb(180, 176, 176);

      text-transform: uppercase;
      font-size: 0.75rem;
      color: grey;

      p {
        cursor: pointer;
      }

      p::hover,
      p::focus {
        box-shadow: 0 0 10px rbga(0, 0, 0, 0.5);
      }

      .highlightText {
        text-transform: lowercase;
        font-weight: bold;
        font-size: 1.3rem;
        color: #000;
      }

      // register-view,
      // login-view {
      //   display: none;
      //   visibility: hidden;
      // }

      // .visible {}

      @media only screen and (min-width: 768px) {
        font-size: 1.25rem;

        .highlightText {
          font-size: 2.2rem;
        }
      }
    }

    .flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }
  }
  @media only screen and (min-width: 990px) {
    flex-direction: row;
    padding: 0 2em 0 4em;
  }

  .big-screen {
    display: none;
    visibility: hidden;
  }

  @media only screen and (min-width: 1200px) {
    .big-screen {
      display: block;
      visibility: visible;
    }
  }
}
</style>
