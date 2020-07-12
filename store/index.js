const CLEAR_TIMEOUT = 5000

export const state = () => ({
  currentMessage: null,
})

export const mutations = {
  setCurrentGlobalMessage(state, message) {
    state.currentMessage = message
  },
  clearCurrentGlobalMessage(state) {
    state.currentMessage = null
  },
}

export const actions = {
  setGlobalMessage({ commit }, message) {
    commit('setCurrentGlobalMessage', message)
    setTimeout(() => commit('clearCurrentGlobalMessage'), CLEAR_TIMEOUT)
  },
}

export const getters = {
  currentMessage(state) {
    return state.currentMessage
  },
}
