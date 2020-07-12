<template>
  <div id="app">
    <global-header />
    <div class="content-wrapper">
      <div class="content-wrapper__channels">
        <add-channel-container />
        <channel-container />
      </div>
      <div class="content-wrapper__main">
        <video-container />
        <up-next-video-container />
      </div>
      <global-message-container />
    </div>
  </div>
</template>

<script>
import GlobalHeader from '../components/GlobalHeader.vue'
import AddChannelContainer from '../containers/AddChannelContainer.vue'
import ChannelContainer from '../containers/ChannelContainer.vue'
import GlobalMessageContainer from '../containers/GlobalMessageContainer.vue'
import VideoContainer from '../containers/VideoContainer.vue'
import UpNextVideoContainer from '../containers/UpNextVideoContainer.vue'

export default {
  name: 'App',
  components: {
    GlobalHeader,
    AddChannelContainer,
    ChannelContainer,
    GlobalMessageContainer,
    VideoContainer,
    UpNextVideoContainer,
  },
}
</script>

<style lang="scss">
@import '../styles/include.scss';
@import '../styles/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-size: $font-size-2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: $space-5 + $space-2;
  @include mobile-breakpoint {
    margin-top: $space-4 + $space-2;
  }
  margin-bottom: $space-2;
}

.content-wrapper {
  display: flex;
  max-width: 1200px;
  padding: 0 5vw;
  margin: 0 auto;
  text-align: left;
  &__main {
    width: 66.66%;
    @include mobile-breakpoint {
      width: 100%;
    }
  }
  &__channels {
    width: 33.33%;
    margin-right: $space-2;
    @include mobile-breakpoint {
      width: 100%;
    }
  }
  .add-channel-container {
    margin-bottom: $space-1;
  }
  .up-next-video-container {
    margin-top: $space-0;
  }
  @include mobile-breakpoint {
    flex-direction: column-reverse;
  }
}
</style>
