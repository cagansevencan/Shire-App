<script>
import HelloWorld from '@/components/HelloWorld.vue'

import { mapState } from 'vuex'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['countAbout'])
    ,
    upperCaseMsg() {
      return this.msg.toUpperCase()
    }
  }
}
</script>

<template lang="pug">
.about
  h1 This is an about page
  HelloWorld(type="countAbout" :count="countAbout" msg="This is Bostanci!")
</template>
