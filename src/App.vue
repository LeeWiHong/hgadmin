<template>
  <div id="app">
    <div class="menuleft">
      <Menu></Menu>
    </div>
    <div class="contentright"></div>
    <router-view/>
  </div>
</template>

<script>
import Menu from '../src/components/MenuComponent'
export default {
  name: 'App',
  components:{
    Menu
  }
}

</script>

<style>
#app {
  flex: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  position:absolute;position:fixed; z-index:1000; bottom:0px; 
  width: 100%;
  height: 100%;
}
.menuleft{
  float: left;
  background: coral;
  width: 18%;
  height: 100%;
}
.contentright{
  background: yellow;
  width: 100%;
  height: 100%;
}
</style>
