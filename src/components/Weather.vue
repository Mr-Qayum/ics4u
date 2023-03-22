<script setup>
import { ref } from "vue";
import axios from "axios";

const props = defineProps(["city", "latitude", "longitude"]);
const result = ref(null);

// async then example
axios
  .get(
    `https://api.open-meteo.com/v1/forecast?latitude=${props.latitude}&longitude=${props.longitude}&current_weather=true`
  )
  .then((weather) => {
    result.value = weather.data;
  })
  .catch((error) => {
    console.log(error);
  });

// async-await example
try {
  result.value = (
    await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${props.latitude}&longitude=${props.longitude}&current_weather=true`
    )
  ).data;
} catch (error) {
  console.log(error);
}
</script>

<template>
  <div class="weather-container">
    <slot />
    <h1>{{ props.city }}</h1>
    <template v-if="result">
      <h3>latitude: {{ result.latitude }}</h3>
      <h3>longitude: {{ result.longitude }}</h3>
      <h3>temperature: {{ result.current_weather.temperature }}</h3>
      <h3>windspeed: {{ result.current_weather.windspeed }}</h3>
    </template>
  </div>
</template>

<style scoped>
.weather-container {
  border-style: solid;
  padding: 1rem;
}
</style>
