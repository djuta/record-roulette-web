<template>
  <button
    :class="`big-button big-button--${kind}`"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BigButton',
  props: {
    text: { type: String, default: '' },
    kind: { type: String, default: '' },
    onClick: { type: Function, default: () => {} },
    type: { type: String, default: '' },
    disabled: Boolean,
  },
}
</script>

<style lang="scss">
@import '../styles/include.scss';
.big-button {
  width: 100%;
  font-size: $font-size-3;
  padding: $space-1;
  border: none;
  color: #fff;
  background: $color-primary;
  border-radius: $space-0;
  &:disabled {
    color: rgba(255, 255, 255, 0.25);
  }
  &:hover:not(:disabled) {
    background: $color-primary-dark;
  }
}
</style>
