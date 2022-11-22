<script setup>
import { ref } from "vue";
import Weather from "./components/Weather.vue";

const city = ref("Toronto,43.6532,79.3832");
</script>

<template>
  <div class="app-container">
    <Suspense>
      <Weather />
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
