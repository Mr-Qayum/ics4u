<script setup>
import OptimusPrime from "./components/OptimusPrime.vue";
import Form from "./components/Form.vue";
import Blog from "./components/Blog.vue";
</script>

<template>
  <div id="main">
    <Blog />
    <OptimusPrime />
    <Form />
  </div>
</template>

<style scoped>
#main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
