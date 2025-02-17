<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const horseList = computed(() => store.state.horseList);
</script>

<template>
  <div class="container">
    <h2>Horse List</h2>
    <div class="horseListContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Condition</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="horse in horseList" :key="horse.id">
            <td>{{ horse.name }}</td>
            <td>{{ horse.condition }}</td>
            <td
              :style="{
                backgroundColor: horse.color,
                color: horse.color === 'Black' ? 'white' : 'black',
              }"
            >
              {{ horse.color }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  margin: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
}

h2 {
  padding: 10px;
  margin: 0;
  background-color: #f0eb64;
  border: 1px solid black;
}
.horseListContainer {
  height: calc(100vh - 150px);
  overflow-y: auto;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  height: 30px;
  width: 100%;
}
thead {
  background-color: #b9b9b9;
}
</style>
