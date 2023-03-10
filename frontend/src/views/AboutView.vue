<script>
import HelloWorld from '@/components/HelloWorld.vue'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'AboutView',
  data() {
    return {
      users: {},
      isLoading: true
    }
  },
  components: {
    HelloWorld
  },
  async mounted() {
    this.users = await this.fetchUsers()
    this.isLoading = false
  },
  computed: {
    ...mapState(['countAbout'])
    ,
    upperCaseMsg() {
      return this.msg.toUpperCase()
    }
  },
  methods: {
    ...mapActions(['fetchUsers']),
  }
}
</script>

<template lang="pug">
.about
  h1 This is an about page
  p(v-if="errMessage") {{ errMessage }}
  p(v-else-if="isLoading") Loading...
  p(v-else)
    h2 There {{ users.length === 1 ? 'is' : 'are' }} {{ users.length }} user{{ users.length === 1 ? '' : 's' }}.
    ol
    li(v-for="user in users")
      a(:href="`/users/${user._id}`") {{ user.name }}
    
</template>
