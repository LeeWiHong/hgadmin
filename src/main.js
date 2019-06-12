// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import JsEncrypt from 'jsencrypt'


Vue.use(Antd)
Vue.use(mavonEditor)
Vue.use(axios)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$http = axios;
Vue.prototype.$jsEncrypt= JsEncrypt

axios.defaults.headers.post['Content-type'] = "application/json"
// axios.defaults.baseURL = global.baseURL

router.beforeEach((to, from, next) => {
  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("isLogin");

  console.log(getFlag+"fffff")
  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === true){
    next()
    //如果已登录，还想想进入登录注册界面，则定向回首页
    if (!to.meta.isLogin) {
       //iViewUi友好提示
      next({
        path: '/'
      })
    }
  
  //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/login',
      })
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
