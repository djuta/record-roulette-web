<template>
  <section class="up-next-video-container">
    <h3 v-if="upNextVideos.length">Up Next</h3>
    <ul class="up-next-video-container__playlist">
      <li v-for="video in upNextVideos" :key="video.videoId">
        <badge-card :image="video.image" :title="video.title" />
      </li>
    </ul>
  </section>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import { mapGetters } from 'vuex'
import BadgeCard from '../components/BadgeCard.vue'

Vue.use(VueYoutube)

export default {
  name: 'VideoContainer',
  components: {
    BadgeCard,
  },
  computed: mapGetters({
    upNextVideos: 'videos/upNextVideos',
  }),
}
</script>
