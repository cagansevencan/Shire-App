<script>
export default {
    name: 'BusinessView',
    data() {
        return {
            businessId: ''
        }
    },
    mounted() {
        this.businessId = this.$route.params.id
    }
}
</script>

<template lang="pug">
.business 
    h1 Business Detail {{ businessId }}
</template>