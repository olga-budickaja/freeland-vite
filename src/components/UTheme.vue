<script setup>
import UIButton from "@/components/UI/UIButton.vue";
import { ref } from "vue";

const emit = defineEmits(['toggle']);

const change = ref(false)
const handleToggle = () => {
  change.value = !change.value;
  emit('toggle');
}

</script>

<template>
  <UIButton v-if="!change" icon="sun" @click="handleToggle"/>
  <UIButton v-else icon="moon" @click="handleToggle"/>
</template>

<style lang="scss" scoped>
.theme {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: transparent;
}
</style>