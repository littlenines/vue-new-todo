<template>
  <ToDo/>
</template>

<script>
import ToDo from './components/ToDo.vue';

export default {
  name: 'App',
  components: {
    ToDo
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
