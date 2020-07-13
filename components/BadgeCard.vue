<template>
  <div class="badge-card">
    <div
      v-if="image"
      class="badge-card__image"
      :style="{ backgroundImage: `url('${image}')` }"
    />
    <div class="badge-card__title">{{ title }}</div>
    <icon-button
      v-if="onButtonClick"
      :on-click="onButtonClick"
      :text="buttonText"
      :icon="buttonIcon"
    />
  </div>
</template>

<script>
import IconButton from './IconButton.vue'

export default {
  name: 'BadgeCard',
  components: {
    IconButton,
  },
  props: {
    image: { type: String, default: '' },
    title: { type: String, default: '' },
    onButtonClick: { type: Function, default: undefined },
    buttonText: { type: String, default: '' },
    buttonIcon: { type: String, default: '' },
  },
}

export class BadgeCardPropBuilder {
  constructor(title, image, id = title) {
    this.props = { image, title, id }
  }

  addButtonProps(onButtonClick, buttonText, buttonIcon) {
    this.props = {
      ...this.props,
      onButtonClick,
      buttonText,
      buttonIcon,
    }
    return this
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../styles/include.scss';

.badge-card {
  height: $space-4;
  display: flex;
  padding: $space-0;
  box-sizing: content-box;
  align-items: center;
  &__image {
    border: $border-color-0;
    height: $space-4;
    width: $space-4;
    background-size: cover;
    background-position: center;
  }
  &__title {
    padding: 0 $space-1;
    flex: 1;
    @include truncate;
  }
  .icon-button {
    flex-shrink: 0;
    margin-left: auto;
  }
}
</style>
