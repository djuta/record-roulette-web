<template>
  <button
    class="icon-button"
    :type="type"
    :style="{ backgroundImage: `url('${icon}')` }"
    :disabled="disabled"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: { type: String, default: '' },
    text: { type: String, default: '' },
    onClick: { type: Function, default: () => {} },
    type: { type: String, default: '' },
    disabled: Boolean,
  },
}
</script>

<style lang="scss">
@import '../styles/include.scss';
.icon-button {
  padding: 0;
  border: none;
  background-color: $color-primary;
  height: $space-4;
  text-indent: -999vw;
  width: $space-4;
  color: #fff;
  border-radius: 50%;
  background-size: $space-2;
  background-repeat: no-repeat;
  background-position: center;
  &:disabled {
    opacity: 0.5;
  }
  &:hover:not(:disabled) {
    background-color: $color-primary-dark;
  }
}
</style>
