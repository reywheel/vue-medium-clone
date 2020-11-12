import authApi from '@/api/auth'
import {setItem} from '@/helpers/localStorage'

export default {
  state: {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
  },
  getters: {},
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
    },
    registerSuccess(state, user) {
      state.isSubmitting = false
      state.currentUser = user
      state.isLoggedIn = true
    },
    registerFailure(state, errors) {
      state.isSubmitting = false
      state.validationErrors = errors
    },
    loginStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
    },
    loginSuccess(state, user) {
      state.isSubmitting = false
      state.currentUser = user
      state.isLoggedIn = true
    },
    loginFailure(state, errors) {
      state.isSubmitting = false
      state.validationErrors = errors
    }
  },
  actions: {
    register(context, credentials) {
      context.commit('registerStart')
      return new Promise(resolve => {
        authApi
          .register(credentials)
          .then(response => {
            context.commit('registerSuccess', response.data.user)
            setItem('accessToken', response.data.user.token)
            resolve()
          })
          .catch(response => {
            context.commit('registerFailure', response.response.data.errors)
          })
      })
    },
    login(context, credentials) {
      context.commit('loginStart')
      return new Promise(resolve => {
        authApi
          .login(credentials)
          .then(response => {
            context.commit('loginSuccess', response.data.user)
            setItem('accessToken', response.data.user.token)
            resolve()
          })
          .catch(error => {
            context.commit('loginFailure', error.response.data.errors)
          })
      })
    }
  }
}
