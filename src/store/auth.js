export default {
  state: {
    isSubmitting: false
  },
  getters: {},
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
    },
    registerFinish(state) {
      state.isSubmitting = false
    }
  },
  actions: {}
}
