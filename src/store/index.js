import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    user: "Mr. Qayum",
  }),
  actions: {
    greeting() {
      console.log(`Hello ${this.user}!`);
    }
  }
})