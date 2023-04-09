<script>
import { computed, watchEffect } from 'vue'
import { useGeolocation } from '../useGeolocation'

export default {
    name: 'MapView',
    setup() {
        const { coords, error } = useGeolocation();
        const lat = computed(() => coords.value?.latitude || 0);
        const lng = computed(() => coords.value?.longitude || 0);

        return { lat, lng, error };
    },


}
</script>

<template>
    <div>
        <h1>Your coordinates:</h1>
        <p> Longitude: {{ lng }} <br /> Latitude: {{ lat }} </p>
        <p></p>

    </div>
</template>