import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/auth'
import feed from '@/store/feed'
import tags from '@/store/tags'
import article from '@/store/article'
import createArticle from '@/store/createArticle'
import updateArticle from '@/store/updateArticle'
import settings from '@/store/settings'
import addLike from '@/store/addLike'
import userProfile from '@/store/userProfile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    tags,
    article,
    createArticle,
    updateArticle,
    settings,
    addLike,
    userProfile
  }
})
