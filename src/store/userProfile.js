import userProfileApi from '@/api/userProfile'

export const mutationTypes = {
  getUserProfileStart: '[userProfile] getUserProfileStart',
  getUserProfileSuccess: '[userProfile] getUserProfileSuccess',
  getUserProfileFailure: '[userProfile] getUserProfileFailure'
}

export const actionTypes = {
  getUserProfile: '[userProfile] getUserProfile'
}

export default {
  state: {
    userProfile: null,
    isLoading: false,
    errors: null
  },
  getters: {},
  mutations: {
    [mutationTypes.getUserProfileStart](state) {
      state.userProfile = null
      state.errors = null
      state.isLoading = true
    },
    [mutationTypes.getUserProfileSuccess](state, userProfile) {
      state.isLoading = false
      state.userProfile = userProfile
    },
    [mutationTypes.getUserProfileFailure](state, errors) {
      state.isLoading = false
      state.errors = errors
    }
  },
  actions: {
    [actionTypes.getUserProfile](context, {slug}) {
      return new Promise(resolve => {
        context.commit(mutationTypes.getUserProfileStart)
        userProfileApi
          .getUserProfile(slug)
          .then(userProfile => {
            context.commit(mutationTypes.getUserProfileSuccess, userProfile)
            resolve()
          })
          .catch(result => {
            context.commit(mutationTypes.getUserProfileFailure, result.response.data.errors)
          })
      })
    }
  }
}
