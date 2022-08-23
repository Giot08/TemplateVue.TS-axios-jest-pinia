<script setup lang="ts">

import { reactive, ref } from "vue";
import axios from "axios";

import { useStore } from '../data/main.store';
const mainState = useStore().$state;

defineProps<{ msg: string }>();

const state = reactive({
  api: [],
});

const getChile = async () => {
  try {
    await axios.get("https://restcountries.com/v3.1/alpha/chi")
    .then((res) => {
      state.api = res.data[0].name;
    });
  } catch (error) {
    return console.log(error);
  }
};

</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <button @click="getChile">Get api</button>
  <p>{{ state.api }}</p>
  <p>{{ mainState.count }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
