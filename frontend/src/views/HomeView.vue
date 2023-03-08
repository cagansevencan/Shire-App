<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { mapState } from 'vuex'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['countHome'])
    ,
    upperCaseMsg() {
      return this.msg.toUpperCase()
    }
  }
}
</script>

<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  HelloWorld(type="countHome" :count="countHome" msg="This is HOME!")
</template>
