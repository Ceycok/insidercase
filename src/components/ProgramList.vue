<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Laps from "../samples/Laps.json";

const store = useStore();
const programList = computed(() => store.state.programList);
</script>

<template>
  <div class="container">
    <h2>Program</h2>
    <div class="programListContainer">
      <div v-for="(program, index) of programList" :key="program.id">
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
  margin: 10px 0;
  width: 150px;
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
  padding: 10px;
  background-color: #5087eb;
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

.programListContainer {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  overflow: auto;
}
</style>
