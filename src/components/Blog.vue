<script setup>
import { blogs } from "../utils/server";
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div class="blog-container">
    <h1>{{ store.user }}</h1>
    <section v-for="(blog, index) in blogs" :key="index">
      <h1>{{ blog.title }}</h1>
      <h3>{{ blog.date }}</h3>
      <p>{{ blog.text }}</p>
    </section>
  </div>
</template>

<style scoped>
.blog-container {
  border-style: solid;
  border-radius: 1;
  padding: 1rem;
}
</style>
