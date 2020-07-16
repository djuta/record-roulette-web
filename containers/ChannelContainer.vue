<template>
  <section class="channel-container">
    <h2>Channels</h2>
    <ul class="channel-container__selected">
      <li v-for="channel in channels" :key="channel.channelId">
        <badge-card v-bind="channel" />
      </li>
    </ul>
    <big-button
      kind="go"
      :text="isLoading ? 'Loading...' : 'Get Videos'"
      :on-click="getVideos"
      :disabled="!hasChannels || isLoading"
    >
    </big-button>
    <big-button
      kind="go"
      text="Next Video ❯"
      :on-click="nextVideo"
      :disabled="!currentVideo"
    >
    </big-button>
    <div class="channel-container__mobile-button">
      <icon-button
        icon="/images/arrow-right.svg"
        text="Go to next video"
        :on-click="nextVideo"
        :disabled="!currentVideo"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import BadgeCard, { BadgeCardPropBuilder } from '../components/BadgeCard.vue'
import BigButton from '../components/BigButton.vue'
import IconButton from '../components/IconButton.vue'

export default {
  name: 'ChannelContainer',
  components: {
    BadgeCard,
    BigButton,
    IconButton,
  },
  data: () => ({ isLoading: false }),
  computed: {
    ...mapState({
      channels({ channels: state }) {
        const channels = state.channels.map((channel) => {
          const { title, image } = channel
          const onClick = () => this.removeChannel(channel)
          return new BadgeCardPropBuilder(title, image).addButtonProps(
            onClick,
            'Remove Channel',
            '/images/minus.svg'
          ).props
        })
        const backfillNumber = 5 - channels.length
        for (let i = 0; i < backfillNumber; i += 1) {
          channels.push(new BadgeCardPropBuilder('', '').props)
        }
        return channels
      },
    }),
    ...mapGetters({
      currentVideo: 'videos/currentVideo',
      hasChannels: 'channels/hasChannels',
    }),
  },
  methods: {
    async getVideos() {
      this.isLoading = true
      await this.refreshVideos()
      this.isLoading = false
    },
    ...mapActions({
      removeChannel: 'channels/removeChannel',
      refreshVideos: 'videos/refreshVideos',
      nextVideo: 'videos/nextVideo',
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../styles/include.scss';
.channel-container {
  &__selected {
    border: $border-color-0;
  }
  .big-button {
    margin-top: $space-1;
  }
  &__mobile-button {
    display: none;
    @include mobile-breakpoint {
      display: block;
      bottom: $space-3;
      right: $space-3;
      position: fixed;
      .icon-button {
        box-shadow: $box-shadow;
        height: $space-5;
        width: $space-5;
        background-size: $space-3;
      }
    }
  }
}
</style>
