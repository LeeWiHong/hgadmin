<template>
    <div>
      <LoginComponent @jump2home="jump2home"></LoginComponent>
      <router-view></router-view>
    </div>
</template>
<script>
import LoginComponent from './components/LoginComponent'
export default {
  name:'App',
  components:{
    LoginComponent
  },
  methods: {
    jump2home(){
      this.$router.push('/index')
    }
  },
}
</script>

