<script>
export default {
  name: 'AboutView',
}
</script>

<template>
  <div id="about">
    <main>
      <!-- <zalook-logo /> -->
      <div class="call-to-action">
        <p class="tagline big-screen-only" aria-hidden="true">Mix, match, discover and create outfits!</p>
        <h2>
          Create your Look <br />
          Find your Style
        </h2>
        <p>Date Night?</p>
        <p>Picnic at the beach?</p>
        <p>Just another day at work?</p>
        <p class="gap">Coming up with 'complete' outfits for that perfect look is now a breeze with our look boards!</p>
        <div class="buttons-wrapper">
          <router-link class="btn btn-primary" to="/get-started">Get Started </router-link>
          <!-- <button class="btn btn-secondary" @click="showVideo">Sneak Peek</button> -->
        </div>
      </div>
    </main>

    <!-- <slide-show :direction="1" /> -->
    <!-- <slide-show class="big-screen" :direction="-1" /> -->
  </div>
</template>

<style lang="scss" scoped>
#about {
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: left;
  font-family: 'Poppins', sans-serif;

  main {
    width: 70%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .call-to-action {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      margin-bottom: 1em;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 30px;
      letter-spacing: -4%;
      position: relative;
    }

    h2::after {
      content: url(../assets/images/underline.png);
      transform: scale(0.5);
      position: absolute;
      top: 20.5%;
      left: 15%;
    }

    p {
      font-size: 0.75rem;
      line-height: 1rem;
      color: #5e6282;

      // width: 80%;
    }

    .gap {
      margin-top: 1em;
    }

    .big-screen-only {
      text-transform: uppercase;
      color: #df6951;
      font-size: 1.125rem;
      font-weight: 700;
      width: 100%;

      visibility: hidden;
      display: none;
    }

    .buttons-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2em;
      margin-bottom: 2em;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 0.75rem;
      }

      .btn {
        // width: 30%;
        color: #fff;
        padding: 0.8em 2em;
        border-radius: 0.75em;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

        font-weight: 500;
      }

      .btn.btn-primary {
        background-color: #df6951;
      }

      .btn.btn-primary:hover,
      .btn.btn-primary:focus {
        background-color: #000;
      }

      .btn.btn-secondary {
        background-color: #000;
      }
    }

    @media only screen and (min-width: 768px) {
      width: 70%;

      h2 {
        font-size: 3.5rem;
        line-height: 4.5rem;
        margin: 0 0 0.5em;
      }

      h2:after {
        transform: scale(1);
        position: absolute;
        top: 9%;
        left: 55%;
      }

      p {
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0;
        width: 70%;
      }

      .big-screen-only {
        display: block;
        visibility: visible;
      }

      .buttons-wrapper {
        justify-content: flex-start;
        gap: 3em;
        margin-top: 3em;
        margin-bottom: 3em;

        .btn {
          font-size: 1.125rem;
        }
      }
    }

    @media only screen and (min-width: 990px) {
      h2 {
        font-size: 4.25rem;
        line-height: 5.56rem;
        margin-bottom: 0.1em;
      }
    }

    @media only screen and (min-width: 1200px) {
      h2:after {
        left: 42%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
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
