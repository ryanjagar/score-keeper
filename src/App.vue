<template>
<v-app>
  <div id="app">
    
     
    <five-hundred/>
  </div>
</v-app>
</template>

<script>
import FiveHundred from './components/FiveHundred'

export default {
  name: 'App',
  components: {
    FiveHundred
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>