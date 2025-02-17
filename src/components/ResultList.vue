<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Laps from "../samples/Laps.json";

const store = useStore();
const resultList = computed(() => store.state.resultList);
</script>

<template>
  <div class="container">
    <h2>Results</h2>
    <div class="resultListContainer">
      <div v-for="(program, index) of resultList" :key="index">
        <h3>{{ index + 1 }} Lap - {{ Laps[index] }}m</h3>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(racer, index) in program" :key="racer.id">
              <td>{{ index + 1 }}</td>
              <td>{{ racer.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  margin: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
}

h2 {
  padding: 10px;
  background-color: #a0cd78;
  margin: 0;
  border: 1px solid black;
}
h3 {
  margin: 0;
  text-align: center;
  background-color: #dc735e;
  font-size: small;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  height: 10px;
  width: 100%;
}

thead {
  background-color: #b9b9b9;
}

.resultListContainer {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  overflow: auto;
}
</style>
