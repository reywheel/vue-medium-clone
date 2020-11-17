import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register'
import Login from '@/views/Login'
import GlobalFeed from '@/views/GlobalFeed'
import TagFeed from '@/views/TagFeed'
import MyFeed from '@/views/MyFeed'
import Article from '@/views/Article'
import CreateArticle from '@/views/CreateArticle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'feed',
    component: MyFeed
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagFeed
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
    path: '/articles/create',
    name: 'createArticle',
    component: CreateArticle
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article,
    props: true
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
