<script>
// @ is an alias to /src

import { useGeolocation } from '../useGeolocation'
import { useStore } from "vuex";
import { ref, computed, watchEffect, onMounted } from "vue";


export default {
  name: 'BusinessesView',
  setup() {
    const store = useStore()
    const businesses = ref([])
    const isLoading = ref(true)
    const errMessage = ref('')
    const { coords, error } = useGeolocation();
    const lat = computed(() => coords.value?.latitude || 0);
    const lng = computed(() => coords.value?.longitude || 0);




    const fetchData = async () => {
      console.log("fetching data...");
      isLoading.value = true;
      try {
        const data = await store.dispatch('fetchNearbyBusinesses', { lat: lat.value, lng: lng.value });
        businesses.value = data || [];
      } catch (err) {
        console.error(error);
        errMessage.value = error.message || "Failed to fetch businesses.";
      } finally {
        isLoading.value = false;
      }
    }
    watchEffect(() => {
      fetchData();
    });

    const businessesCount = computed(() => {
      return businesses.value.length > 0 ? businesses.value.length : null;
    });

    return {
      businesses,
      isLoading,
      errMessage,
      lat,
      lng,
      businessesCount,
    };
  },
};

</script>

<template lang="pug">
.home
  h1 Businesses 
  p(v-if="isLoading") Loading...
  p(v-else-if="businessesCount !== null") There are {{ businessesCount }} businesses around you.
  p(v-else) No businesses found.
  ol
    li(v-for="business in businesses")
      a(:href="`/businesses/${business._id}`") {{ business.name }}
  <h1>Your coordinates:</h1>
  <p> Latitude: {{ lat }} <br /> Longitude: {{ lng }}</p>

</template>
