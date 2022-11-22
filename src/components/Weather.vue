<script setup>
import axios from "axios";
import { ref } from "vue";

const city = ref(null);
const weather = ref(false);

const getWeather = async () => {
  const data = city.value.split(",");
  weather.value = (
    await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: data[1],
        longitude: data[2],
        current_weather: true,
      },
    })
  ).data;
};
</script>

<template>
  <div class="weather-container">
    <select v-model="city">
      <option value="Toronto,43.6532,79.3832">Toronto</option>
      <option value="Ottawa,45.4215,75.6972">Ottawa</option>
      <option value="Vancouver,49.2827,123.1207">Vancouver</option>
      <option value="Calgary,51.0447,114.0719">Calgary</option>
    </select>
    <button @click="getWeather">Get</button>
    <div v-if="weather">
      <p>Lat: {{ weather.latitude }} deg.</p>
      <p>Long: {{ weather.longitude }} deg.</p>
      <p>Temp: {{ weather.current_weather.temperature }} C</p>
      <p>Windspeed: {{ weather.current_weather.windspeed }} km/h</p>
      <p>Wind Direction: {{ weather.current_weather.winddirection }} deg.</p>
    </div>
  </div>
</template>

<style scoped>
.weather-container p {
  color: white;
  font-size: 1.25rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
