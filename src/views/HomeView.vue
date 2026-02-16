<!-- inside the script tag is where we do things like import statement, define variables and functions, states, etc that would be used inside the template tag. Think of the script as where js is written, and then the template as where the JSX is. -->

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const userStore = useUserStore();
const loginCount = ref<number>(0);

const userName = userStore.userName;
function welcomeUser() {
  loginCount.value++;
}
</script>

<!-- inside the template tag is where the HTML is written. Think of it as the JSX in React. -->
<template>
  <div class="home">
    <h1>Welcome to the Smart Workspace, {{ userName }}!</h1>
    <p>You have accessed this dashboard {{ loginCount }} times.</p>

    <!-- v-on is used to listen to events. It is similar to @ in React. The syntax is v-on:event="functionName" or @event="functionName"-->
    <button v-on:click="welcomeUser">Log Access</button>
  </div>
</template>

<!-- inside the style tag is where the CSS is written. Think of it as the CSS in React. -->
<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
