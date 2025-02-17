<script setup>
import gsap from "gsap";
import { defineProps, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import Laps from "../samples/Laps.json";

const props = defineProps({
  horse: {
    type: Object,
  },
});

const horseRef = ref(null);

const store = useStore();

const tl = gsap.timeline({
  paused: true,
});

function startAnimation() {
  tl.to(horseRef.value, {
    duration:
      (3 * Laps[store.state.currentProgram]) / 1200 -
      (props.horse.condition / 100) * 1,
    x: 450,
    ease: "power1.in",
    onComplete: () => {
      store.commit("HorseFinished", props.horse);
    },
  });
}

onMounted(() => {
  startAnimation();
});

watch(
  () => store.state.isRunning,
  (value) => {
    if (value) {
      tl.play();
    } else {
      tl.pause();
    }
  }
);

watch(
  () => store.state.currentProgram,
  () => {
    tl.restart();
    tl.clear();
    startAnimation();
    if (!store.state.isRunning) {
      tl.pause();
    }
  }
);

watch(
  () => store.state.horseList,
  () => {
    tl.restart();
    tl.clear();
    startAnimation();
    tl.pause();
  }
);
</script>

<template>
  <svg
    ref="horseRef"
    :fill="props.horse?.color"
    stroke="black"
    stroke-width="2"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="60px"
    height="60px"
    viewBox="0 0 219.175 219.175"
    xml:space="preserve"
  >
    <path
      d="m197 41 2-2 2-3v4l3-3v2l-2 5v2l1 4 4 6 2 4 7 11 3 7v1l-1 4-2 2-3 1c-2 1-5-1-6-3 0-2-1-2-3-3h-1l-4-3-2-2-2-1c-5-1-5-1-7-3h-4l-2 2-8 14v3c-1 4-2 8-1 11v3c1 3-1 6-3 9l-2 2 4 3 8 5c2 2 4 5 4 8v4l3 12-1 2-2 8v2l-2 6-5-5c-1-2-2-3-1-5 0-2 2-1 3-1l-1-4v-2l1-5-4 4-5 8-4 2c-2-1-4 0-6 1l-6 2-3-3v-2l3-3 2-1c1-1 1-2 3-1 1 0 2 0 3 2l2-2 2-1 6-7 2-2 1-4-9-3-6-3-4-2h-4l-2-4-10 3-7 1h-7l-8-1-5-1-5-1h-1l-2 4v6l-3 12c1 4 0 7 2 10l1 2 5 3 6 6 3 4 1 1c3 1 4 4 6 6l1 3-4 1-7-2c0-2 2-3 0-5h-3l-4-4-3-4c-2 2-1 5-1 7h-3l-4-3c-2-1-3-3-2-6-1 0-3 0-2-2l-5-5-13-7-2-1-2-1-2-2v-4l5-12-1-3v-2l-3-2c-3-2-7-3-9-6h-1l-1 6-4-2-1 3c-2-1-1-2-1-3l1-2c-2-2-4-3-4-6l-2-1h-1c-1 3-3 5-6 6l-1 1c-4 0-7 1-9 4l-1 1 1-2 1-1v-1l-3 1 4-3c-2 0-4 1-4 3l-1 4h-1l-2 4-1-2-2 1v-1c1-1 2-2 1-4l1-1-4 1h-8l1-1v-1l-5-4v-1l-3-3-3-2-3-1 1-1v-1l3 2 1-1 4 2c2 1 5 1 8-1h2l2-3 1-4 3-9 3-6c1-3 3-5 6-5h8-1l-2-1h-1 5l7 4 3 2 4 2 4 1 2-2c4-4 8-6 14-9l7-2 2-1h13l16-1h8c3-2 7-2 9-4v-3h-2l2-2 3-4c2-1 4-2 4-4v-1c1-1 2 0 3-2l2-2 3-2h-1l1-1-2-1 3-2-1-1h3l1-3h-3l2-1-1-1h1l2 1 8-2 1 1v-1h1l3 1h5l4-2 3-2h5l10 1h5zM86 133c-2 4-3 7-3 11l1 3 2 2 4 3 1-11-1-4-4-4z"
    />
  </svg>
</template>

<style></style>
