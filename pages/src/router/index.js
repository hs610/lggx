import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from './../pages/home/index'
import login from './../pages/login/login'
import resetpwd from './../pages/resetpwd/resetpwd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/resetpwd',
      name: 'resetpwd',
      component: resetpwd
    }
  ]
})
