<template>
  <div :class="`global-message global-message--${type}`">
    <h4>{{ errorLabel }}</h4>
    <p>{{ message }}</p>
  </div>
</template>

<script>
const ERROR_LABEL = {
  error: 'Error',
}

export default {
  name: 'GlobalMessage',
  props: {
    message: { type: String, default: '' },
    type: { type: String, default: '' },
  },
  computed: {
    errorLabel() {
      return ERROR_LABEL[this.type]
    },
  },
}
</script>

<style lang="scss">
@import '../styles/include.scss';

.global-message {
  position: fixed;
  z-index: 999;
  top: $space-2 + $space-5;
  right: $space-2;
  padding: $space-1;
  max-width: 300px;
  font-size: $font-size-2;
  font-weight: $font-weight-4;
  color: #fff;
  border-radius: $space-1;
  box-shadow: $box-shadow;
  &--error {
    background-color: #c4391d;
  }
  &--info {
    background-color: blue;
  }
}
</style>
