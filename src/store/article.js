import articleApi from '@/api/article'

export default {
  state: {
    data: null,
    isLoading: false,
    errors: null,
    deletingInProcess: false
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
    },

    deleteArticleStart(state) {
      state.deletingInProcess = true
    },
    deleteArticleSuccess(state) {
      state.deletingInProcess = false
    },
    deleteArticleFailure(state) {
      state.deletingInProcess = false
    }
  },
  actions: {
    getArticle(context, {slug}) {
      context.commit('getArticleStart')
      return new Promise(resolve => {
        articleApi
          .getArticle(slug)
          .then(response => {
            context.commit('getArticleSuccess', response.data.article)
            resolve()
          })
          .catch(() => {
            context.commit('getArticleFailure')
          })
      })
    },
    deleteArticle(context, {slug}) {
      context.commit('deleteArticleStart')
      return new Promise(resolve => {
        articleApi
          .deleteArticle(slug)
          .then(() => {
            context.commit('deleteArticleSuccess')
            resolve()
          })
          .catch(() => {
            context.commit('deleteArticleFailure')
          })
      })
    }
  }
}
