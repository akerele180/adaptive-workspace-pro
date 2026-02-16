<script setup lang="ts">
import { useTimer } from "@/composables/useTimer";

const { secondsLeft, isRunning, start, stop, reset } = useTimer(300);
</script>

<template>
  <div class="timer-tool">
    <h2>Focus Timer: {{ secondsLeft }}s</h2>
    <button v-on:click="stop">Stop</button>
    <button @click="start">Start</button>
  </div>
</template>
