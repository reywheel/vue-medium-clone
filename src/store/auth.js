import authApi from '@/api/auth'
import {setItem} from '@/helpers/localStorage'

export const mutationTypes = {
  updateUserStart: '[auth] updateUserStart',
  updateUserSuccess: '[auth] updateUserSuccess',
  updateUserFailure: '[auth] updateUserFailure'
}

export const actionTypes = {
  updateUser: '[auth] updateUser'
}

export default {
  state: {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    }
  },
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
    },

    getCurrentUserStart(state) {
      state.isLoading = true
    },
    getCurrentUserSuccess(state, user) {
      state.isLoading = false
      state.isLoggedIn = true
      state.currentUser = user
    },
    getCurrentUserFailure(state) {
      state.isLoading = false
      state.isLoggedIn = false
      state.currentUser = null
    },

    [mutationTypes.updateUserStart]() {},
    [mutationTypes.updateUserSuccess](state, user) {
      state.currentUser = user
    },
    [mutationTypes.updateUserFailure]() {}
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
    },
    getCurrentUser(context) {
      context.commit('getCurrentUserStart')
      return new Promise(resolve => {
        authApi
          .getCurrentUser()
          .then(response => {
            context.commit('getCurrentUserSuccess', response.data.user)
            resolve()
          })
          .catch(() => {
            context.commit('getCurrentUserFailure')
          })
      })
    },
    [actionTypes.updateUser](context, {userInput}) {
      return new Promise(resolve => {
        context.commit(mutationTypes.updateUserStart)
        authApi
          .updateUser(userInput)
          .then(user => {
            context.commit(mutationTypes.updateUserSuccess, user)
            resolve()
          })
          .catch(result => {
            context.commit(mutationTypes.updateUserFailure, result.response.data.errors)
          })
      })
    }
  }
}
