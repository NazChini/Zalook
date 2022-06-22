<script>
import { mapActions } from 'vuex'

export default {
  name: 'LookHeader',
  props: {
    userName: {
      type: String,
      default: 'there!',
    },
  },
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<template>
  <header>
    <div class="header-container-logo">
      <div class="logo-wrapper">
        <div class="logo">
          <img src="../assets/images/zalook.png" alt="logo" />
        </div>
        <h1>zalook</h1>
      </div>
      <div class="tagline">
        <p>
          <span class="tagline--1">Create Your Look </span>
          <i class="fa-solid fa-circle fa-2xs"></i>
          <span class="tagline--2"> Find Your Style</span>
        </p>
      </div>
      <div class="header-container-user">
        <p>Hi, {{ userName }}</p>
        <a class="logout" @click="doLogout" href="#">Logout</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  margin: 2em 0 1em;
  display: flex;
  flex-direction: column;

  .greet-user {
    margin-top: 0.7em;
  }
}

.header-container-logo {
  margin: 0 auto;

  .logo-wrapper {
    margin-bottom: 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 2em;

      img {
        width: 100%;
        transform: rotate(-30deg);
      }
    }

    h1 {
      margin-left: 0.4em;
      font-weight: 400;
      font-size: 1.5rem;
    }
  }

  .tagline {
    font-size: 0.75rem;
    font-weight: 500;
    border-bottom: 0.5px solid #000;

    .tagline--2 {
      font-style: italic;
      color: #df6951;
    }

    i {
      padding: 0 1em;
    }
  }

  .header-container-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;

    .logout {
      cursor: pointer;
      padding-bottom: 0.5em;
    }

    .logout:hover,
    .logout:focus {
      border-bottom: 0.5px solid grey;
    }
  }
}
</style>
