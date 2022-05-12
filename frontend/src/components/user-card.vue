/* eslint-disable vue/no-multiple-template-root */
<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'This user has no bio.',
    }
  },
}
</script>

<template lang="pug">
.box 
  p Hello!
  h1 {{ user.firstName }} ({{ user.email }}) 
  //- p Bio: {{ user.bio || defaultBio }} 
  //- h2 Looks: ({{ user.looks.length }})
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
