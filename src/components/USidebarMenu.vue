<script setup>
import { ref } from "vue";
import UIList from "@/components/UI/UIList.vue";

const links = ref([
  {name: 'Home', link: '/'},
  {name: 'Categories', link: '/categories', sub: 'sub'},
]);

const subLinks = ref([
  {name: 'Discover', link: '/discover'},
  {name: 'Animation', link: '/animation'},
  {name: 'UI', link: '/ui'},
]);

</script>

<template>
  <UIList type="column" :items="links" :sub-items="subLinks" />
</template>

<style lang="scss" scoped>

</style>