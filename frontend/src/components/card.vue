/* eslint-disable vue/multi-word-component-names */
<script>
export default {
  props: ['id', 'draggable'],
  methods: {
    dragStart: e => {
      const target = e.target

      e.dataTransfer.setData('card_id', target.id)

      setTimeout(() => {
        target.style.display = 'none'
      }, 0)
    },
  },
}
</script>

<style scoped>
.card {
  padding: 15px 25px;
  background-color: #f3f3f3;
  cursor: pointer;
  margin-bottom: 15px;

  resize: both;
  overflow: auto;
  max-width: 250px;
  max-height: 300px;
}
</style>

<template>
  <div :id="id" class="card" :draggable="draggable" @dragstart="dragStart" @dragover.stop>
    <slot />
  </div>
</template>
