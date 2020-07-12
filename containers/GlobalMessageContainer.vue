<template>
  <global-message v-if="currentMessage" v-bind="{ ...currentMessage }" />
</template>

<script>
import { mapGetters } from 'vuex'
import GlobalMessage from '../components/GlobalMessage.vue'

export default {
  name: 'GlobalMessageContainer',
  components: { GlobalMessage },
  computed: mapGetters({
    currentMessage: 'currentMessage',
  }),
}
</script>
