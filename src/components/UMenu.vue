<script setup>
 import { ref } from "vue";
 import UIList from "@/components/UI/UIList.vue";

 const links = ref([
   {name: 'Home', link: '/'},
   {name: 'Categories', link: '/categories', drop: 'drop'},
 ]);

 const linksDrop = ref([
   {name: 'Discover', link: '/discover'},
   {name: 'Animation', link: '/animation'},
   {name: 'UI', link: '/ui'},
 ]);
</script>

<template>
  <UIList
      :items="links"
      :drop-items="linksDrop"
  />
</template>