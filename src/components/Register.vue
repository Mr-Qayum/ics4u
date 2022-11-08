<script setup>
import { ref } from "vue";

const done = ref(false);
const name = ref("");
const email = ref("");

const getData = () => {
  done.value = true;
};
</script>

<template>
  <div class="register-container">
    <form @submit.prevent="getData()">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="email" placeholder="Email" v-model="email" />
      <slot />
    </form>
    <div v-if="done" class="submitted">
      <p>You submitted:</p>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<style scoped>
.register-container form {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 0.5rem;
}

.submitted {
  color: white;
}
</style>
