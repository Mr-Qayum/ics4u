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
      <Weather />
    </div>
  </Suspense>
</template>

<style scoped>
#main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
