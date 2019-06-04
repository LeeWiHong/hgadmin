<!--
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
-->

<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
}
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>

