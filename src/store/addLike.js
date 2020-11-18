import articleApi from '@/api/article'

export const mutationTypes = {
  addLikeStart: '[addLike] addLikeStart',
  addLikeSuccess: '[addLike] addLikeSuccess',
  addLikeFailure: '[addLike] addLikeFailure'
}

export const actionTypes = {
  addLike: '[addLike] addLike'
}

export default {
  state: {},
  getters: {},
  mutations: {
    [mutationTypes.addLikeStart]() {},
    [mutationTypes.addLikeSuccess]() {},
    [mutationTypes.addLikeFailure]() {}
  },
  actions: {
    [actionTypes.addLike](context, {slug, isLiked}) {
      return new Promise(resolve => {
        context.commit(mutationTypes.addLikeStart)
        const request = isLiked ? articleApi.addArticleToFavorite(slug) : articleApi.deleteArticleFromFavorite(slug)
        request
          .then(() => {
            context.commit(mutationTypes.addLikeSuccess)
            resolve()
          })
          .catch(() => {
            context.commit(mutationTypes.addLikeFailure)
          })
      })
    }
  }
}
