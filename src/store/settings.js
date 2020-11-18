import {mutationTypes as authMutationTypes} from '@/store/auth'

export const mutationTypes = {}

export default {
  state: {
    isSubmitting: false,
    errors: null
  },
  getters: {},
  mutations: {
    [authMutationTypes.updateUserStart](state) {
      state.isSubmitting = true
    },
    [authMutationTypes.updateUserSuccess](state) {
      state.isSubmitting = false
      state.errors = null
    },
    [authMutationTypes.updateUserFailure](state, errors) {
      state.isSubmitting = false
      state.errors = errors
    }
  },
  actions: {}
}
