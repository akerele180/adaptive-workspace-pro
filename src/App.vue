<script setup hide lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "./stores/user";

const userStore = useUserStore();
</script>

<template>
  <header>
    <nav v-if="userStore.isAuthenticated">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>

      <button v-on:click="userStore.logout">Logout</button>
    </nav>
    <p v-else>Please, Log in to continue.</p>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  background: #f4f4f4;
  padding: 1rem;
}
</style>
