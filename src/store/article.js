import articleApi from '@/api/article'

export default {
  state: {
    data: null,
    isLoading: false,
    errors: null,
    delete: {
      isLoading: false
    },
    favorite: {
      isLoading: false
    }
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
      state.delete.isLoading = true
    },
    deleteArticleSuccess(state) {
      state.delete.isLoading = false
    },
    deleteArticleFailure(state) {
      state.delete.isLoading = false
    },

    addArticleToFavoriteStart(state) {
      state.favorite.isLoading = true
    },
    addArticleToFavoriteSuccess(state, article) {
      state.favorite.isLoading = false
      state.data = article
    },
    addArticleToFavoriteFailure(state) {
      state.favorite.isLoading = false
    },

    deleteArticleFromFavoriteStart(state) {
      state.favorite.isLoading = true
    },
    deleteArticleFromFavoriteSuccess(state, article) {
      state.favorite.isLoading = false
      state.data = article
    },
    deleteArticleFromFavoriteFailure(state) {
      state.favorite.isLoading = false
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
    },
    addArticleToFavorite(context, {slug}) {
      context.commit('addArticleToFavoriteStart')
      return new Promise(resolve => {
        articleApi
          .addArticleToFavorite(slug)
          .then(article => {
            context.commit('addArticleToFavoriteSuccess', article)
            resolve()
          })
          .catch(() => {
            context.commit('addArticleToFavoriteFailure')
          })
      })
    },
    deleteArticleFromFavorite(context, {slug}) {
      context.commit('deleteArticleFromFavoriteStart')
      return new Promise(resolve => {
        articleApi
          .deleteArticleFromFavorite(slug)
          .then(article => {
            context.commit('deleteArticleFromFavoriteSuccess', article)
            resolve()
          })
          .catch(() => {
            context.commit('deleteArticleFromFavoriteFailure')
          })
      })
    }
  }
}
