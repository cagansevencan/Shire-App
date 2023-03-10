<script>
import { mapActions } from 'vuex'
export default {
    name: 'BusinessView',
    data() {
        return {
            isLoading: true,
            business: {},
            location: {}
        }
    },
    async mounted() {
        this.business = await this.fetchBusiness(this.$route.params.id)
        this.location = await this.fetchBusinessLocations(this.business.location)
        this.isLoading = false
    },
    methods: {
        ...mapActions(['fetchBusiness', 'fetchBusinessLocations']),
    },
}
</script>

<template lang="pug">
.business 
    p(v-if="errMessage") {{ errMessage }}
    p(v-else-if="isLoading") Loading...
    p(v-else) 
        h1 Business Details
        p {{ business.name }}
        p {{ business.description }}
        p {{ business.location }}
        h2 Location Details
        p {{ location.coordinates }}
        
</template>