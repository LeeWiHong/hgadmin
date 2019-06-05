// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  '../src/style/index.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'

Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.headers.post['Content-type'] = "application/json"
axios.defaults.baseURL = global.baseURL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
