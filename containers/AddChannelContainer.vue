<template>
  <section class="add-channel-container">
    <h2>Add a Channel</h2>
    <form :class="className" @submit.prevent="onSubmit(inputValue)">
      <input
        v-model="inputValue"
        :disabled="inputDisabled"
        required
        type="url"
        placeholder="Enter a YouTube Channel URL..."
        pattern="http(s?)(:\/\/)((www.)?)(([^.]+)\.)?(youtube.com)\/(user|channel)\/([a-zA-z0-9\-_]+)?"
      />
      <icon-button
        type="submit"
        :text="buttonState.text"
        :icon="buttonState.icon"
        :disabled="inputDisabled"
      />
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import IconButton from '../components/IconButton.vue'

export default {
  name: 'ChannelContainer',
  components: { IconButton },
  data: () => ({
    inputValue: '',
    isLoading: false,
  }),
  computed: {
    buttonState() {
      if (this.isLoading) {
        return { text: 'Loading', icon: '/images/loader.svg' }
      }
      return { text: 'Add Channel', icon: '/images/plus.svg' }
    },
    className() {
      let className = 'add-channel-container__input'
      if (this.isLoading) {
        className += ` ${className}--loading`
      }
      return className
    },
    ...mapState({
      inputDisabled({ channels: state }) {
        return this.isLoading || state.channels.length >= 5
      },
    }),
  },
  methods: {
    ...mapActions({
      addChannel: 'channels/addChannel',
    }),
    async onSubmit() {
      this.isLoading = true
      await this.addChannel(this.inputValue)
      this.isLoading = false
      this.inputValue = ''
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../styles/include.scss';
.add-channel-container {
  &__input {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      padding: $space-0 + $space-1;
      font-size: $font-size-2;
      flex: 1;
      height: $space-4;
      border: $border-color-0;
      margin-right: $space-1;
    }
    .icon-button {
      flex-shrink: 0;
    }
    &--loading .icon-button {
      animation: spin 1s linear infinite;
    }
  }
}
</style>
