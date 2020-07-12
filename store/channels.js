import { fetchChannel } from '../services/apiService'

export const state = () => ({
  channels: [],
})

export const mutations = {
  appendChannel(state, channel) {
    state.channels.push(channel)
  },

  removeChannel(state, channel) {
    const index = state.channels.indexOf(
      (c) => c.channelId === channel.channelId
    )
    state.channels.splice(index, 1)
  },
}

export const actions = {
  async addChannel({ commit, dispatch }, channelUrl) {
    try {
      const channel = await fetchChannel(channelUrl, dispatch)
      commit('appendChannel', channel)
    } catch {}
  },

  removeChannel({ commit }, channel) {
    commit('removeChannel', channel)
  },
}

export const getters = {
  channelIds(state) {
    return state.channels.map(({ channelId }) => channelId)
  },

  hasChannels(state) {
    return state.channels.length > 0
  },
}
