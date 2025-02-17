<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <header>
    <div class="container">
      <h1>Horse Racing</h1>
      <div class="buttons">
        <button @click="store.dispatch('GenerateGame')">
          GENERATE PROGRAM
        </button>
        <button @click="store.commit('ReverseIsRunning')">START/PAUSE</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f08c87;
  padding: 1rem;
  height: 50px;
}
.buttons {
  display: flex;
  gap: 1rem;
}

button {
  height: 2rem;
}
</style>
