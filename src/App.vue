<script setup>
import UHeader from "@/components/layout/UHeader.vue";
import USidebar from "@/components/layout/USidebar.vue";
import { ref } from "vue";
import { currentTheme } from "@/composables/changeTheme.js";

currentTheme();
const isOpenMenu = ref(false);
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
}
</script>

<template>
  <div class="container">
    <UHeader @open="toggleMenu" />
    <USidebar :open-sidebar="isOpenMenu" />
    <div :class="['content', {content_full: !isOpenMenu}]">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-left: 250px;
  padding: 37px 37px 40px;
  transition: 0.5s;
  &_full {
    margin-left: 0;
  }
}
</style>
