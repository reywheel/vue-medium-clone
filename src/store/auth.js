import {register} from '@/api/auth'
import {setItem} from '@/helpers/localStorage'

export default {
  state: {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    errors: null
  },
  getters: {},
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
      state.errors = null
    },
    registerSuccess(state, user) {
      state.isSubmitting = false
      state.currentUser = user
      state.isLoggedIn = true
    },
    registerFailure(state, errors) {
      state.isSubmitting = false
      state.errors = errors
    }
  },
  actions: {
    register(context, credentials) {
      context.commit('registerStart')
      return new Promise(resolve => {
        register(credentials)
          .then(response => {
            context.commit('registerSuccess', response.data.user)
            setItem('accessToken', response.data.user.token)
            resolve()
          })
          .catch(response => {
            context.commit('registerFailure', response.response.data.errors)
          })
      })
    }
  }
}
