<template>
  <div id="app">
    <div class="menuleft" >
      <Menu @sideitemclick="sideitemclick">

      </Menu>
    </div>
    <div class="contentright">
      <MenuContent>

      </MenuContent>
    </div>
    
  </div>
</template>

<script>
import Menu from '../src/components/MenuComponent'
import MenuContent from '../src/components/ContentComponent'
export default {
  name: 'App',
  components:{
    Menu,
    MenuContent
  },
  methods: {
    sideitemclick(itemindex){
      console.log(itemindex)
      switch (itemindex) {
        case 0:
          this.$router.replace('/')
          break;
        case 1:
          this.$router.replace('/user')
          break;
        case 2:
          this.$router.replace('/article')
          break;
        case 3:
          this.$router.replace('/category')
          break;
        case 4:
          this.$router.replace('/platform')
          break;
        case 5:
          this.$router.replace('/advice')
          break;

        default:
          break;
      }
    }
  },
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
