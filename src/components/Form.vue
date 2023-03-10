<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const checked = ref(true);

const message = () => {
  alert(`Hello ${firstName.value} ${lastName.value}!`);
}
</script>

<template>
  <form @submit.prevent="message()">
    <input v-model="firstName" type="text" placeholder="First Name" />
    <span>{{ firstName }}</span>
    <br />
    <input v-model="lastName" type="text" placeholder="Last Name" />
    <span>{{ lastName }}</span>
    <br />
    <input type="checkbox" v-model="checked"/> Happy
    <br />
    <input type="submit" value="Click"/>
  </form>
</template>

<style scoped></style>