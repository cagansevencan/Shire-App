<script>
import { mapActions } from 'vuex'
export default {
    name: 'UserView',
    data() {
        return {
            isLoading: true,
            user: {}
        }
    },
    async mounted() {
        this.user = await this.fetchUser(this.$route.params.id)
        this.isLoading = false
    },
    methods: {
        ...mapActions(['fetchUser']),
    },
}
</script>

<template lang="pug">
.business 
    h1 User Details
    p(v-if="errMessage") {{ errMessage }}
    p(v-else-if="isLoading") Loading...
    p(v-else)
        p {{ user.name }}
        p {{ user.email }}
        p {{ user.createdAt }}
        button.create Create a Business
        
        
        
</template>