<script>
import ZalookLogo from '../components/blocks/zalook-logo.vue'
import SlideShow from '../components/blocks/slide-show.vue'
import Register from './register'

export default {
  name: 'GetStarted',
  components: {
    ZalookLogo,
    SlideShow,
    Register,
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
  },
}
</script>

<template>
  <div id="get-started-container">
    <main>
      <zalook-logo />
      <div class="get-started-header">
        <p :class="{ highlightText: !isNewUser }" class="login" @click="renderLoginView">Login</p>
        <p :class="{ highlightText: isNewUser }" class="register">Sign Up</p>
      </div>
      <register v-if="isNewUser" />
      <!-- <login-view v-else /> -->
      <!-- <p class="already-registered" @click="renderLoginView">
        Already Registered?
      </p> -->
    </main>
    <slide-show :direction="1" />
    <slide-show class="big-screen" :direction="-1" />
  </div>
</template>

<style lang="scss" scoped>
#register-container {
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

main {
  width: 70%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  .get-started-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.2em 0;
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
  }

  .call-to-action {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }
}

.big-screen {
  display: none;
  visibility: hidden;
}
</style>
