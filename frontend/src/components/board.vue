<template>
  <div :id="id" class="board" @dragover.prevent @drop.prevent="drop" :width="width">
    <slot />
  </div>
</template>

<style scoped>
.board {
  display: flex;
  flex-direction: column;

  width: 100%;
  /* max-width: 300px; */

  background-color: #313131;
  border: 1px solid red;
  padding: 15px;
}
</style>

<script>
export default {
  props: ['id', 'width'],
  methods: {
    drop: e => {
      const card_id = e.dataTransfer.getData('card_id')

      const card = document.getElementById(card_id)

      card.style.display = 'block'

      e.target.appendChild(card)
    },
  },
}
</script>
