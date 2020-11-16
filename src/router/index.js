import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Feeds from '@/views/Feeds'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Feeds
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Home
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: Feeds
  },
  {
    path: '/articles/create',
    name: 'createArticle',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: Home
  },
  {
    path: '/profile/:slug',
    name: 'userProfile',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
