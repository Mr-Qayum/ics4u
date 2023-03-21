<script setup>
import { ref } from "vue";

const isVisible = ref(true);
const count = ref(0);

const hide = () => {
  isVisible.value = !isVisible.value;
  if (!isVisible.value) {
    count.value++;
  }
};
</script>

<template>
  <div id="optimus-container">
    <p>{{ count }}</p>
    <button @click="hide()">Hide</button>
    <img
      v-if="isVisible"
      class="optimus"
      src="https://cdn.shopify.com/s/files/1/0054/4371/5170/products/667pin.png?v=1627414689"
    />
  </div>
</template>

<style scoped>
#optimus-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  padding: 1rem;
}

.optimus {
  width: 25%;
  aspect-ratio: 2 / 3;
}
</style>
