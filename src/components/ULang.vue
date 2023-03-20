<template>
  <div class="lang">
    <div class="lang__item">{{ $t('right-menu.en') }}</div>
    /
    <div class="lang__item">{{ $t('right-menu.uk') }}</div>
  </div>
</template>

<script setup>

</script>

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