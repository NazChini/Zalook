<script>
export default {
  name: 'LookDashboard',
}
</script>

<template>
  <div id="look-dashboard-container">
    <div id="images">
      <img draggable="true" src="https://i.imgur.com/8rmMZI3.jpg" width="100" height="100" />
      <img draggable="true" src="https://i.imgur.com/q9aLMza.png" width="100" height="100" />
      <img draggable="true" src="https://i.imgur.com/wMU4SFn.jpg" width="100" height="100" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#look-container {
  position: relative;
  width: 800px;
  height: 600px;
  box-shadow: 0 0 5px 1px black;
  margin: 10px auto;
  border: 5px solid transparent;
}
#canvas-container.over {
  border: 5px dashed cyan;
}
#images img.img_dragging {
  opacity: 0.4;
}
/* 
Styles below based on  http://www.html5rocks.com/en/tutorials/dnd/basics/ 
*/

/* Prevent the text contents of draggable elements from being selectable. */
[draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
  cursor: move;
}
</style>
