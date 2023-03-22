<script setup>
import OptimusPrime from "./components/OptimusPrime.vue";
import Form from "./components/Form.vue";
import Blog from "./components/Blog.vue";
import Weather from "./components/Weather.vue";
</script>

<template>
  <Suspense>
    <div id="main">
      <Blog />
      <OptimusPrime />
      <Form />
      <Weather city="Toronto" latitude="43.6532" longitude="79.3832">
        <h1>Worst</h1>
      </Weather>
      <Weather city="Orlando" latitude="28.5384" longitude="81.3789">
        <h1>Best</h1>
      </Weather>
      <Weather city="Chicago" latitude="41.8781" longitude="87.6298">
        <h1>Run for your life!</h1>
      </Weather>
    </div>
  </Suspense>
</template>

<style scoped>
#main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
