<script setup>
import axios from "axios";
import { ref, watch } from "vue";

const weather = ref(null);
const props = defineProps(["city", "latitude", "longitude"]);

weather.value = (
  await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: props.latitude,
      longitude: props.longitude,
      current_weather: true,
    },
  })
).data;
let condition = "";

switch (weather.value.current_weather.weathercode) {
  case 0:
    condition = "Clear sky";
    break;
  case 1:
  case 2:
  case 3:
    condition = "Mainly clear, partly cloudy, and overcast";
    break;
}

watch(
  () => props.latitude,
  async () => {
    weather.value = (
      await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude: props.latitude,
          longitude: props.longitude,
          current_weather: true,
        },
      })
    ).data;
  }
);
</script>

<template>
  <div class="weather-container">
    <p>{{ props.city }}</p>
    <p>Lat: {{ weather.latitude }} deg.</p>
    <p>Long: {{ weather.longitude }} deg.</p>
    <p>Temp: {{ weather.current_weather.temperature }} C</p>
    <p>Windspeed: {{ weather.current_weather.windspeed }} km/h</p>
    <p>Wind Direction: {{ weather.current_weather.winddirection }} deg.</p>
    <p>{{ condition }}</p>
  </div>
</template>

<style scoped>
.weather-container p {
  color: white;
  font-size: 1.25rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
