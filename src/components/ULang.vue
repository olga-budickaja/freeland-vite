<script setup>

import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: 'global' })
const switchLang = () => {
  locale.value === 'en' ? locale.value = 'uk' : locale.value = 'en';
  localStorage.setItem('lang', locale.value)
}
</script>

<template>
  <div class="lang" @click="switchLang">
    <div class="lang__item">{{ $t('right-menu.en') }}</div>
    /
    <div class="lang__item">{{ $t('right-menu.uk') }}</div>
  </div>
</template>

<style lang="scss" scoped>
.lang {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  gap: 5px;
  cursor: pointer;
  max-width: 50px;
  &__item {
    font-weight: 200;
  }
}
</style>