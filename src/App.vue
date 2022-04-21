<template>
  <div id="app">
    <router-link to="/first-app">App1</router-link> |
    <router-link to="/second-app">App2</router-link> |
    <router-link to="/third-app">App3</router-link>

    <div id="sub-app"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
