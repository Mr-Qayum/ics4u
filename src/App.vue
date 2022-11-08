<script setup>
import Date from "./components/Date.vue";
import Weather from "./components/Weather.vue";
import Calculator from "./components/Calculator.vue";
import Register from "./components/Register.vue";
</script>

<template>
  <div class="app-container">
    <Suspense>
      <Weather city="Toronto" latitude="43.6532" longitude="79.3832" />
    </Suspense>
    <Suspense>
      <Weather city="Ottawa" latitude="45.4215" longitude="75.6972" />
    </Suspense>
    <Suspense>
      <Weather city="Vancouver" latitude="49.2827" longitude="123.1207" />
    </Suspense>
    <Suspense>
      <Weather city="Calgary" latitude="51.0447" longitude="114.0719" />
    </Suspense>
    <Date />
    <Calculator />
    <Register>
      <input type="submit" value="Register" />
      <p>Hello</p>
      <h1>Bob!</h1>
    </Register>
    <Register>
      <input type="submit" value="Login" />
    </Register>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  background-color: #000000aa;
}
</style>
