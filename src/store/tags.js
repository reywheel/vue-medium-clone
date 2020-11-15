import {getTags} from '@/api/tags'

export default {
  state: {
    isLoading: false,
    data: null,
    errors: null
  },
  getters: {},
  mutations: {
    getTagsStart(state) {
      state.isLoading = true
      state.data = null
    },
    getTagsSuccess(state, data) {
      state.isLoading = false
      state.data = data
    },
    getTagsFailure(state) {
      state.isLoading = false
      state.data = null
    }
  },
  actions: {
    getTags(context) {
      context.commit('getTagsStart')
      return new Promise(resolve => {
        getTags()
          .then(response => {
            context.commit('getTagsSuccess', response.data.tags)
            resolve()
          })
          .catch(() => {
            context.commit('getTagsFailure')
          })
      })
    }
  }
}
