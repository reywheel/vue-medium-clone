import {getArticle} from '@/api/article'

export default {
  state: {
    data: null,
    isLoading: false,
    errors: null
  },
  getters: {},
  mutations: {
    getArticleStart(state) {
      state.data = null
      state.errors = null
      state.isLoading = true
    },
    getArticleSuccess(state, data) {
      state.isLoading = false
      state.data = data
      state.error = null
    },
    getArticleFailure(state) {
      state.isLoading = false
      state.errors = true
      state.data = null
    }
  },
  actions: {
    getArticle(context, {slug}) {
      context.commit('getArticleStart')
      return new Promise(resolve => {
        getArticle(slug)
          .then(response => {
            context.commit('getArticleSuccess', response.data.article)
            resolve()
          })
          .catch(() => {
            context.commit('getArticleFailure')
          })
      })
    }
  }
}
