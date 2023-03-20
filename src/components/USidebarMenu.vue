<script setup>
import { ref } from "vue";
import UIList from "@/components/UI/UIList.vue";

const links = ref([
  {name: 'home', link: '/'},
  {name: 'categories', link: '/categories', sub: 'sub'},
]);

const subLinks = ref([
  {name: 'discover', link: '/discover'},
  {name: 'animation', link: '/animation'},
  {name: 'ui', link: '/ui'},
]);

</script>

<template>
  <UIList type="column" :items="links" :sub-items="subLinks" />
</template>

<style lang="scss" scoped>

</style>