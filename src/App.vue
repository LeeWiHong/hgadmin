<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="sideitemclick(0)">
          <a-icon type="home" />
          <span class="nav-text">主页管理</span>
        </a-menu-item>
       
        <a-menu-item key="2" @click="sideitemclick(1)">
          <a-icon type="user" />
          <span class="nav-text">用户管理</span>
        </a-menu-item>
        <a-menu-item key="3" @click="sideitemclick(2)">
          <a-icon type="file-text" />
          <span class="nav-word">文章管理</span>
        </a-menu-item>
        <a-menu-item key="4" @click="sideitemclick(3)">
          <a-icon type="hdd" />
          <span class="nav-text">分类管理</span>
        </a-menu-item>
        <a-menu-item key="5" @click="sideitemclick(4)">
          <a-icon type="laptop" />
          <span class="nav-text">平台管理</span>
        </a-menu-item>
        <a-menu-item key="6" @click="sideitemclick(5)">
          <a-icon type="mail" />
          <span class="nav-text">建议管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
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
    },
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

