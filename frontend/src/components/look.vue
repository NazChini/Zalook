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
    clearLook() {
      this.look.getObjects().forEach(o => {
        if (o !== this.look.backgroundImage) {
          this.look.remove(o)
        }
      })
    },
  },
}
</script>

<template>
  <div id="look-wrapper" class="look-wrapper dots">
    <canvas id="look"></canvas>
    <div class="toolbar">
      <div @click="toggleDrawingMode" class="pencil">
        <i class="fa-solid fa-pencil fa-xl"></i>
      </div>
      <div @click="clearLook" class="deleteAll">
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
    <!-- <div class="note">
      <p>
        Use the pencil tool to draw on the canvas. Click on it again to deactivate drawing mode. Resize or rotate your
        drawing by selecting it.
      </p>
    </div> -->
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

  .toolbar {
    position: fixed;
    bottom: 5%;
    left: 8%;

    display: flex;
    align-items: center;
    gap: 1em;
    border: 1px solid red;

    .pencil,
    .deleteAll {
      box-sizing: content-box;
      background: #df6951;
      width: 3em;
      height: 3em;
      border: 0.3em solid #f7c4ba;
      border-radius: 50%;
      cursor: pointer;

      .fa-pencil,
      .fa-trash-can {
        color: #fff;
        padding: 0.9em 0;
      }
    }

    .pencil:hover,
    .pencil:focus,
    .deleteAll:hover,
    .deleteAll:focus {
      background: #000;
      border-color: lightgrey;
    }

    .pencil:active,
    .deleteAll:active {
      transform: scale(0.9);
      /* Scaling button to 0.98 to its original size */
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
      /* Lowering the shadow */
    }
  }

  .note {
    width: 65%;
    color: grey;
    font-style: italic;
    font-size: 0.6rem;
    text-align: left;
    position: fixed;
    bottom: 6%;
    left: 25%;
    background: rgba(255, 255, 255, 0.5);
  }

  @media only screen and (min-width: 768px) {
    .note {
      font-size: 0.8rem;
      bottom: 6%;
      left: 18%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .note {
      width: 100%;
      font-size: 1rem;
      left: 14%;
    }
  }
}
</style>
