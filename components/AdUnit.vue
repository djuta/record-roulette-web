<template>
  <Adsense data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="1234567890">
  </Adsense>
</template>

<script>
import Vue from 'vue'
import Ads from 'vue-google-adsense'
import vueScript2 from 'vue-script2'

Vue.use(vueScript2)
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

export default {
  name: 'AdUnit',
}
</script>
