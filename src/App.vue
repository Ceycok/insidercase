<script setup>
import Header from "./components/Header.vue";
import Canvas from "./components/Canvas.vue";
import HorseList from "./components/HorseList.vue";
import ProgramList from "./components/ProgramList.vue";
import ResultList from "./components/ResultList.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("GenerateGame");
});
</script>

<template>
  <Header />
  <div class="page">
    <HorseList />
    <Canvas />
    <div class="tables">
      <ProgramList />
      <ResultList />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: calc(100vh - 100px);
}
.tables {
  display: flex;
  flex-direction: row;
}
</style>
