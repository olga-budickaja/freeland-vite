<template>
  <div class="login">
    <UIButton class="login__animate" :label="$t('right-menu.login')" outlined rounded color="blue"/>
  </div>
</template>

<script setup>

import UIButton from "@/components/UI/UIButton.vue";
</script>

<style lang="scss" scoped>
.login {
  &__animate {
    animation: rotateHue 10s alternate infinite;
  }
}
@keyframes rotateHue {
  to {
    filter: hue-rotate(1turn);
  }
}
</style>