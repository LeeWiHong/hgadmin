<template>
  <div class="components-input-demo-presuffix">
    <a-input placeholder="输入账号" v-model="userName" ref="userNameInput">
      <a-icon slot="prefix" type="user" />
      <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
    </a-input>

    <a-input placeholder="输入密码" v-model="password" ref="passwordInput" type="password">
      <a-icon slot="prefix" type="lock" />
      <a-icon v-if="password" slot="suffix" type="close-circle" @click="passwordEditEmpty" />
    </a-input>

    <a-button type="primary" block @click="getLogin">登录</a-button>
  </div>
</template>

<script>
export default {
    name:'LoginComponent',
    data () {
    return {
      userName: '',
      password:''
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.userName = ''
    },
    passwordEditEmpty(){
      this.$refs.passwordInput.focus()
      this.password = ''
    },

    getLogin(){
        this.$http.get('api/login').then(respoonse=>
        {
            if (response.data.success) {
                localStorage.setItem("Flag","isLogin")
                this.$message.success(response.data.msg, 1,
                    () => {
                        this.$router.push("/")
                    }
                );
            }
            else{
                this.$message.error(response.data.msg, 1,
                    () => {}
                );
            }
        })
    }
  },

}
</script>
<style scoped>
.components-input-demo-presuffix{
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.components-input-demo-presuffix .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
  
}
.components-input-demo-presuffix .anticon-close-circle:hover {
  color: #999;
}
.components-input-demo-presuffix .anticon-close-circle:active {
  color: #666;
}
</style>