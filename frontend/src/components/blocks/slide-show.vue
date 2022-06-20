<template>
  <div class="slideshow--container">
    <picture class="slideshow">
      <source
        :style="transform"
        class="slider"
        media="(min-width:990px)"
        srcset="../../assets/images/slider-vertical.png"
      />
      <img class="slider" src="../../assets/images/slider-horizontal.png" alt="" />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    direction: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    transform() {
      return {
        '--transform': 'translateY(' + this.direction * -66.6666 + '%)',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slideshow--container {
  height: 30em;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  source,
  img {
    margin: 0 auto;
    min-height: 100%;
    transform: translate3d(0, 0, 0);
  }

  .slider {
    animation: moveSlideshow 180s linear infinite;
  }

  @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }

  @media only screen and (min-width: 990px) {
    width: 30%;
    height: 100vh;

    @keyframes moveSlideshow {
      100% {
        transform: translateY(-66.6666%);
        // transform: var(--transform);
      }
    }

    @media only screen and (min-width: 1200px) {
      width: 20%;
    }
  }

  .slideshow-bigscreen {
    display: none;
    visibility: hidden;
  }

  //   @media only screen and (min-width: 1200px);
}
</style>
