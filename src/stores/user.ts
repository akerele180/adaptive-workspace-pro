import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userName = ref<string>("Developer");
  const isAuthenticated = ref<boolean>(false);

  function logout() {
    userName.value = "";
    isAuthenticated.value = false;
  }

  return { userName, isAuthenticated, logout };
});
