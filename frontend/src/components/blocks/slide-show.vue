<template>
  <div class="slideshow--container">
    <picture class="slideshow">
      <source
        :class="{ 'move-up': direction === 'up', slider: true }"
        media="(min-width:990px)"
        srcset="../../assets/images/slider-vertical.png"
      />
      <img
        :class="{ 'move-up': direction === 'up', slider: true }"
        src="../../assets/images/slider-horizontal.png"
        alt=""
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: ['direction'],
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
    animation: moveSlideshowDown 180s linear infinite;
    &.move-up {
      animation: moveSlideshowUp 180s linear infinite;
    }
  }

  @keyframes moveSlideshowUp {
    100% {
      transform: translateX(-66.6666%);
    }
  }

  @media only screen and (min-width: 990px) {
    width: 30%;
    height: 100vh;

    @keyframes moveSlideshowDown {
      100% {
        transform: translateY(-66.6666%);
      }
    }

    @keyframes moveSlideshowUp {
      100% {
        transform: translateY(66.6666%);
      }
    }

    @media only screen and (min-width: 1200px) {
      width: 25%;
    }
  }

  .slideshow-bigscreen {
    display: none;
    visibility: hidden;
  }
}
</style>
