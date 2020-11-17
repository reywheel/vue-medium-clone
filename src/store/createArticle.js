import articleApi from '@/api/article'

export default {
  state: {
    article: null,
    isSubmitting: false,
    errors: null
  },
  getters: {},
  mutations: {
    createArticleStart(state) {
      state.isSubmitting = true
    },
    createArticleSuccess(state, article) {
      state.isSubmitting = false
      state.errors = null
      state.article = article
    },
    createArticleFailure(state, errors) {
      state.isSubmitting = false
      state.errors = errors
    }
  },
  actions: {
    createArticle(context, {article}) {
      return new Promise(resolve => {
        context.commit('createArticleStart')
        articleApi
          .createArticle(article)
          .then(article => {
            context.commit('createArticleSuccess', article)
            resolve()
          })
          .catch(result => {
            context.commit('createArticleFailure', result.response.data.errors)
          })
      })
    }
  }
}
