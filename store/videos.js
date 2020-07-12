import { fetchVideos as fetchVideosFromApi } from '../services/apiService'

export const state = () => ({
  videos: [],
})

export const mutations = {
  appendVideos(state, videos) {
    state.videos = state.videos.concat(videos)
  },

  setNextVideo(state) {
    state.videos.shift()
  },

  populateVideos(state, videos) {
    state.videos = videos
  },
}

export const actions = {
  async fetchVideos({ commit, dispatch, rootGetters }) {
    const channelIds = rootGetters['channels/channelIds']
    try {
      const videos = await fetchVideosFromApi(channelIds, dispatch)
      commit('appendVideos', videos)
    } catch {}
  },

  nextVideo({ commit, state, dispatch }) {
    if (state.videos.length < 3) {
      dispatch('fetchVideos')
    }
    commit('setNextVideo')
  },

  async refreshVideos({ commit, dispatch, rootGetters }) {
    const channelIds = rootGetters['channels/channelIds']
    try {
      const videos = await fetchVideosFromApi(channelIds, dispatch)
      commit('populateVideos', videos)
    } catch {}
  },
}

export const getters = {
  currentVideo(state) {
    return state.videos[0]
  },

  upNextVideos(state) {
    return state.videos.slice(1, state.videos.length)
  },
}
