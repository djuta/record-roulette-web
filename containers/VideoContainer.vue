<template>
  <section class="video-container">
    <div class="video-container__title">
      <h2 v-if="!currentVideo">Getting Started</h2>
      <h2 v-else>{{ currentVideo.title }}</h2>
      <div class="video-container__title__autoplay">
        <label for="autoplay">Autoplay</label>
        <input id="autoplay" v-model="shouldAutoplay" type="checkbox" />
      </div>
    </div>
    <div class="video-container__video">
      <youtube
        v-if="currentVideo"
        :video-id="currentVideo.videoId"
        :fit-parent="true"
        :player-vars="{ autoplay }"
      />
      <div v-else class="video-container__video__instructions">
        <description />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import { mapActions, mapGetters } from 'vuex'
import Description from '../components/Description.vue'

Vue.use(VueYoutube)

export default {
  name: 'VideoContainer',
  components: {
    Description,
  },
  data: () => ({
    shouldAutoplay: false,
  }),
  computed: {
    autoplay() {
      return this.shouldAutoplay ? 1 : 0
    },
    ...mapGetters({
      currentVideo: 'videos/currentVideo',
    }),
  },
  methods: mapActions({
    refreshVideos: 'videos/refreshVideos',
    nextVideo: 'videos/nextVideo',
  }),
}
</script>

<style lang="scss">
@import '../styles/include.scss';
.video-container {
  &__title {
    align-items: center;
    display: flex;
    h2 {
      @include truncate;
      flex: 2;
    }
    &__autoplay {
      margin-left: auto;
      display: flex;
      align-items: center;
      label {
        margin-right: $space-1;
      }
      @include mobile-breakpoint {
        font-size: $font-size-1;
      }
    }
  }
  &__video {
    &__instructions {
      background: #eee;
      position: relative;
      .description {
        background: #eee;
        top: 0;
        padding: $space-2;
      }
    }
    margin-bottom: $space-1;
  }
}
</style>
