<script>
import { fabric } from 'fabric'
// import { mapState } from "vuex";

export default {
  name: 'LookView',
  props: {},
  data() {
    return {
      look: null,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    }
  },
  created() {
    console.log(this.width, this.height)
  },
  mounted() {
    this.look = new fabric.Canvas('look', {
      isDrawingMode: false,
      selection: false,
      preserveObjectStacking: true,
      width: this.width,
      height: this.height,
    })
    // this.reloadLook();

    window.addEventListener('resize', this.getDimensions)
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions)
  },
  watch: {
    look: function () {
      window.addEventListener('resize', this.onResize)
    },
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth
      this.height = document.documentElement.clientHeight
    },
    onResize() {
      this.look.setDimensions({
        width: this.width,
        height: this.height,
      })
      this.look.renderAll()
    },
    toggleDrawingMode() {
      this.look.isDrawingMode = !this.look.isDrawingMode
    },
  },
}
</script>

<template>
  <div id="look-wrapper" class="look-wrapper dots">
    <canvas id="look"></canvas>
    <div @click="toggleDrawingMode" class="pencil">
      <i class="fa-solid fa-pencil fa-xl"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.look-wrapper {
  margin: 0 auto;
  border-radius: 1em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.look-wrapper.dots {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='54' height='54' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='13' height='13' fill-opacity='0.1' fill='%23000000'/%3E%3C/svg%3E");
  position: relative;

  .pencil {
    box-sizing: content-box;
    position: fixed;
    bottom: 5%;
    left: 8%;
    background: #df6951;
    width: 3em;
    height: 3em;
    border: 0.3em solid #f7c4ba;
    border-radius: 50%;

    i {
      color: #fff;
      padding: 0.9em 0;
    }
  }
}
</style>
