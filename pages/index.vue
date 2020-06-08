<template>
  <div class="container">
    <FirstMd></FirstMd>
  </div>
</template>

<script>
import firstMd from '~/md/first.md'

export default {
  components: {
    FirstMd: firstMd.vue.component
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
