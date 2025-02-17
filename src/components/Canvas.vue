<script setup>
import { gsap } from "gsap";
import { computed, onMounted, ref } from "vue";
import Horse from "./Horse.vue";
import { useStore } from "vuex";
import Laps from "../samples/Laps.json";

const store = useStore();

const currentProgram = computed(() => store.state.currentProgram);

const programList = computed(() => store.state.programList);
</script>

<template>
  <div class="fieldContainer">
    <div class="field">
      <table>
        <tbody>
          <tr
            v-for="(horse, index) of programList[currentProgram]"
            :key="index"
            class="slot"
          >
            <td class="number">
              {{ index + 1 }}
            </td>
            <td class="track">
              <Horse :horse="horse" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bottomText">
      <span> {{ currentProgram + 1 }} Lap {{ Laps[currentProgram] }}m </span>
      <span class="finishText"> FINISH </span>
    </div>
  </div>
</template>

<style scoped>
.fieldContainer {
  display: flex;
  flex-direction: column;
}
.field {
  display: flex;
  justify-content: baseline;
  margin-top: 60px;
  flex-direction: column;
}
table,
th,
td {
  border-collapse: collapse; /* Added border-collapse */
}
.slot {
  width: 100%;
  height: 70px;
}
.number {
  margin: 4px 0;
  background-color: green;
  height: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 30px;
  color: white;
  font-weight: 700;
  writing-mode: sideways-lr;
}

.track {
  width: 500px;
  height: 64px;
  border-top: 4px dotted black;
  border-bottom: 4px dotted black;
  border-right: 4px solid red;
}

.bottomText {
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  color: red;
}

.finishText {
  position: absolute;
  right: 0;
}
</style>
