<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions } from 'vuex'


export default {
  name: 'HomeView',
  data() {
    return {
      businesses: []
    }
  },
  async mounted() {
    await this.fetchBusinesses().then((businesses) => {
      this.businesses = businesses
    })
  },
  methods: {
    ...mapActions(['fetchBusinesses']),
  },

}
</script>

<template lang="pug">
.home
  h1 Businesses 
  p There are {{ businesses.length }} businesses.
  ol
    li(v-for="business in businesses")
      a(:href="`/businesses/${business.id}`") {{ business.name }}

</template>
