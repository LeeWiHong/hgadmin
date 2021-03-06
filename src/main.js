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
Vue.prototype.$http = axios;
Vue.prototype.$jsEncrypt= JsEncrypt
axios.defaults.headers.common['token'] = localStorage.getItem("token");

axios.defaults.headers.post['Content-type'] = "application/json"
// axios.defaults.baseURL = global.baseURL
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
