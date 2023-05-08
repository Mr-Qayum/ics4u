<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";

const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Brozzzzz..... Yer Paswerdz not coolz!");
    return;
  }

  await createUserWithEmailAndPassword(auth, email.value, passwordOne.value);

  router.push("/root");
};

const loginViaEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, passwordOne.value);
    router.push("/root");
  } catch (error) {
    console.log(error)
  }
};

const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
  router.push("/root");
};
</script>

<template>
  <div class="auth-container">
    <div>
      <h1>Register via Google</h1>
      <button @click="registerViaGoogle()">Google</button>
    </div>
    <div>
      <h1>Register via Email</h1>
      <form class="setup" @submit.prevent="registerViaEmail()">
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
      <h1>Login via Email</h1>
      <form class="login" @submit.prevent="loginViaEmail()">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="passwordOne" type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  gap: 5rem;
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
