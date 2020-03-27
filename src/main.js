import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/js/flexible'
import { Lazyload } from 'mint-ui'
import wx from 'weixin-js-sdk'
import { wxShare } from './model/wxControl'
Vue.use(wx)
Vue.use(Lazyload)

Vue.prototype.$axios = axios

Vue.prototype.$wxShare = wxShare

axios.defaults.baseURL = process.env.VUE_APP_URL

axios.defaults.withCredentials = true

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
