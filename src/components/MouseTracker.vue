<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const x = ref<number>(0);
const y = ref<number>(0);

const update = (e: MouseEvent) => {
  x.value = e.pageX;
  y.value = e.pageY;
};

onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.removeEventListener("mousemove", update));
</script>

<template>
  <slot :x="x" :y="y" />
</template>

<style></style>
