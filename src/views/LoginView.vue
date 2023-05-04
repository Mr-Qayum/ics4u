<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";

const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const register = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Brozzzzz..... Yer Paswerdz not coolz!");
    return;
  }

  const user = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );

  router.push("/root");
};
</script>

<template>
  <div>
    <h1>Register</h1>
    <form class="setup" @submit.prevent="register()">
      <input v-model="email" type="email" placeholder="email" />
      <input
        v-model="passwordOne"
        type="password"
        placeholder="Enter Password"
      />
      <input
        v-model="passwordTwo"
        type="password"
        placeholder="Re-enter Password"
      />
      <input type="submit" value="Register" />
    </form>
    <hr />
    <h1>Login</h1>
    <form class="login">
      <input type="email" />
      <input type="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<style scoped>
.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 15%;
}
</style>
