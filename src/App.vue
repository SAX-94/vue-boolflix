<template>
  <div>
    <!-- components header  -->
    <!-- here i will do the callback with axios -->
    <TheHeader></TheHeader>

    <!-- components main -->
    <TheMain></TheMain>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>