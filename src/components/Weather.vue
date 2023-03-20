<script setup>
import { ref } from "vue";
import axios from "axios";

const result = ref(null);

axios
  .get(
    "https://api.open-meteo.com/v1/forecast?latitude=43.6532&longitude=79.3832&current_weather=true"
  )
  .then((weather) => {
    result.value = weather.data;
    console.log(weather.data);
  });
</script>

<template>
  <div class="weather-container">
    <h1>Toronto</h1>
    <h3>latitude: {{ result.latitude }}</h3>
    <h3>latitude: {{ result.longitude }}</h3>
    <h3>temperature: {{ result.current_weather.temperature }}</h3>
    <h3>windspeed: {{ result.current_weather.windspeed }}</h3>
  </div>
</template>

<style scoped>
.weather-container {
  border-style: solid;
}
</style>
