<script setup>
import { ref } from "vue";
import Weather from "./components/Weather.vue";

const city = ref("Toronto,43.6532,79.3832");
</script>

<template>
  <div class="app-container">
    <select v-model="city">
      <option value="Toronto,43.6532,79.3832">Toronto</option>
      <option value="Ottawa,45.4215,75.6972">Ottawa</option>
      <option value="Vancouver,49.2827,123.1207">Vancouver</option>
      <option value="Calgary,51.0447,114.0719">Calgary</option>
    </select>
    <Suspense>
      <Weather
        :city="city.split(',')[0]"
        :latitude="city.split(',')[1]"
        :longitude="city.split(',')[2]"
      />
    </Suspense>
  </div>
</template>

<style scoped>
.app-container {
  background-color: #000000aa;
  height: 100vh;
  width: 100vw;
}
</style>
