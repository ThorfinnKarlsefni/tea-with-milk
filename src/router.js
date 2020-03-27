import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Goods from './views/goods/goods.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})
