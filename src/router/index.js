import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/main',
      name:'main',
      component:main
    },
  ]
})
