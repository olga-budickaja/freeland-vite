<script setup>
 import { ref } from "vue";
 import UIList from "@/components/UI/UIList.vue";

 const links = ref([
   {name: 'home', link: '/'},
   {name: 'categories', link: '/categories', drop: 'drop'},
 ]);

 const linksDrop = ref([
   {name: 'discover', link: '/discover'},
   {name: 'animation', link: '/animation'},
   {name: 'ui', link: '/ui'},
 ]);
</script>

<template>
  <UIList
      :items="links"
      :drop-items="linksDrop"
  />
</template>