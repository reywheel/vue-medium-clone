import articleApi from '@/api/article'

export default {
  state: {
    article: null,
    isSubmitting: false,
    errors: null
  },
  getters: {},
  mutations: {
    updateArticleStart(state) {
      state.isSubmitting = true
    },
    updateArticleSuccess(state, article) {
      state.isSubmitting = false
      state.article = article
      state.errors = null
    },
    updateArticleFailure(state, errors) {
      state.isSubmitting = false
      state.article = null
      state.errors = errors
    }
  },
  actions: {
    updateArticle(context, {slug, article}) {
      return new Promise(resolve => {
        context.commit('updateArticleStart')
        articleApi
          .updateArticle(slug, article)
          .then(article => {
            context.commit('updateArticleSuccess', article)
            resolve()
          })
          .catch(result => {
            context.commit('updateArticleFailure', result.response.data.errors)
          })
      })
    }
  }
}
