import { onUnmounted, ref } from "vue";

export function useTimer(initialSeconds: number = 60) {
  const secondsLeft = ref<number>(initialSeconds);
  const isRunning = ref<boolean>(false);
  let intervalId: number | null = null;

  function start() {
    if (isRunning.value) return;

    isRunning.value = true;
    intervalId = window.setInterval(() => {
      if (secondsLeft.value > 0) {
        secondsLeft.value--;
      } else {
        stop();
      }
    }, 1000);
  }

  function stop() {
    isRunning.value = false;
    if (intervalId) {
      window.clearInterval(intervalId);
    }
  }

  function reset() {
    stop();
    secondsLeft.value = initialSeconds;
  }

  onUnmounted(() => stop());

  return {
    secondsLeft,
    isRunning,
    start,
    stop,
    reset,
  };
}
