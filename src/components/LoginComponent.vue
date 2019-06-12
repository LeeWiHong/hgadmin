<template>
  <div class="components-input-demo-presuffix">
    <a-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
      <a-icon slot="prefix" type="user" />
      <a-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty" />
    </a-input>
  </div>
</template>

<script>
export default {
    name:'LoginComponent',
    data () {
    return {
      userName: '',
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.userName = ''
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