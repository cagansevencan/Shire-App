<script>
import { mapActions } from 'vuex'
export default {
    name: 'UserView',
    data() {
        return {
            isLoading: true,
            user: {},
            name: '',
            description: '',
            email: '',
            location: {}
        }
    },
    async mounted() {
        this.user = await this.fetchUser(this.$route.params.id)
        this.isLoading = false
    },
    methods: {
        ...mapActions(['fetchUser', 'createBusiness']),
    }
}
</script>

<template lang="pug">
.business 
    h1 User Details
    p(v-if="isLoading") Loading...
    p(v-else)
        p {{ user.name }}
        p {{ user.email }}
        p {{ user.createdAt }}
        h3 Create a new Business
        p 
        p Name
        input(v-model="name")
        p Description
        input(v-model="description")
        p Email
        input(v-model="email")
        p
        button.create(@click="createBusiness({userID: user._id, name, description, email, location: {type: 'Point', coordinates: [-122.4194, 37.7749]} })") Create a Business
        
        
</template>