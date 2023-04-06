<script setup></script>

<template>
  <main>
    <header>
      <h1>My Website</h1>
      <nav>
        <ul class="menu">
          <li>
            <RouterLink to="/blog" custom v-slot="{ navigate }">
              <button @click="navigate" role="link">Blog</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fun" custom v-slot="{ navigate }">
              <button @click="navigate" role="link">Fun</button>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/info" custom v-slot="{ navigate }">
              <button @click="navigate" role="link">Info</button>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="hero-div">
      <img
        src="https://m.media-amazon.com/images/I/61oyWSq2+rL._AC_SL1426_.jpg"
      />
    </div>
  </main>
</template>

<style scoped>
header {
  padding: 1rem;
}

.menu {
  display: flex;
  gap: 1rem;
  list-style-type: none;
  font-size: 40px;
}

button {
  padding: 1rem;
  background-color: black;
  color: white;
  border: none;
}

li:nth-child(1) {
  margin-left: auto;
}

.hero-div {
  display: flex;
  justify-content: center;
}

img {
  width: 50%;
  aspect-ratio: 4 / 3;
}
</style>
