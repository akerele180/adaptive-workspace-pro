<script setup lang="ts">
// Props - What data a component expects from its parent
defineProps<{
  title: string;
}>();

// Emits - What events a component can emit to its parent
const emit = defineEmits<{
  (e: "delete"): void;
}>();
</script>

<template></template>

<style></style>
