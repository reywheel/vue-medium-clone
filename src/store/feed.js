import {getFeed} from '@/api/feed'

export default {
  state: {
    isLoading: false,
    data: null,
    errors: null
  },
  getters: {},
  mutations: {
    getFeedStart(state) {
      state.data = null
      state.isLoading = true
    },
    getFeedSuccess(state, data) {
      state.isLoading = false
      state.data = data
    },
    getFeedFailure(state, errors) {
      state.isLoading = false
      state.errors = errors
      state.data = null
    }
  },
  actions: {
    getFeed(context, {apiUrl}) {
      context.commit('getFeedStart')
      return new Promise(resolve => {
        getFeed(apiUrl)
          .then(response => {
            context.commit('getFeedSuccess', response.data)
            resolve()
          })
          .catch(error => {
            context.commit('getFeedFailure', error)
          })
      })
    }
  }
}
