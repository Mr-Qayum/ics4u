<script setup>
import { blogs } from "./server";
</script>

<template>
  <div>
    <section v-for="(blog, index) in blogs" :key="index">
      <h1>{{ blog.title }}</h1>
      <h3>{{ blog.date }}</h3>
      <p>{{ blog.text }}</p>
    </section>
  </div>
</template>

<style></style>