<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions } from 'vuex'


export default {
  name: 'BusinessesView',
  data() {
    return {
      businesses: [],
      isLoading: true,
    }
  },
  async mounted() {
    try {
      await this.fetchBusinesses().then((businesses) => {
        this.businesses = businesses
      })
    } catch (err) {
      this.errMessage = err.message
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions(['fetchBusinesses']),
  },

}
</script>

<template lang="pug">
.home
  h1 Businesses 
  p(v-if="errMessage") {{ errMessage }}
  p(v-else-if="isLoading") Loading...
  p(v-else) There are {{ businesses.length }} businesses.
  ol
    li(v-for="business in businesses")
      a(:href="`/businesses/${business._id}`") {{ business.name }}

</template>
