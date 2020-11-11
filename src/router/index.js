import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AppRegister from '@/views/AppRegister'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: AppRegister
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
