import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Activity from './views/Activity'
import Detail from './views/Detail'
import Login from './views/Login'
import daka from './views/Daka'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'activity',
      component: Activity
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/daka',
      name: 'daka',
      component: daka
    },
    {
      path: '/Detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})
