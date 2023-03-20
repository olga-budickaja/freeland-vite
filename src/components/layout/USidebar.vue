<script setup>

import USearch from "@/components/USearch.vue";
import ULang from "@/components/ULang.vue";
import UTheme from "@/components/UTheme.vue";
import USidebarMenu from "@/components/USidebarMenu.vue";
import ULogin from "@/components/ULogin.vue";
import { toggleTheme } from "@/composables/changeTheme.js";

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true
  }
});

</script>

<template>
  <div :class="['sidebar', {sidebar_isOpen: openSidebar}]">
    <div class="sidebar__top">
      <ULang />
      <UTheme @toggle="toggleTheme"/>
    </div>
    <USearch />
    <USidebarMenu />
    <div class="hr"></div>
    <div class="center"><ULogin /></div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  left: 0;
  top: 62px;
  height: 100%;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.5s;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isOpen {
    transform: translateX(0px);
  }
  &__top {
    display: flex;
    justify-content: space-between;
  }
}
</style>