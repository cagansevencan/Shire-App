import { onUnmounted, onMounted, ref } from "vue";


export function useGeolocation() {
    const coords = ref({ lat: 0, lng: 0 })
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    //To keep the coords up to date, using GeoLocation watchPosition function
    let watcher = null
    onMounted(() => {
        watcher = navigator.geolocation.watchPosition(
            position => (coords.value = position.coords)
        )
    })
    // To handle the listener safely, 
    // we also need to clean the watcher when the component is unmounted
    onUnmounted(() => {
        if (watcher) navigator.geolocation.clearWatch(watcher)
    })
    return { coords, isSupported }
}