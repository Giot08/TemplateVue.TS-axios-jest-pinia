import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    count: 5,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
