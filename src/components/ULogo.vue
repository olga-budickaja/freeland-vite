<template>
  <div class="logo">
    <div class="logo__circle logo__animate">
      <font-awesome-icon icon="fa-solid fa-code" />
    </div>
    <router-link to="/">
      <div class="logo__title title title_fz18">
        Free<span class="logo__accent logo__animate title title_fz18">Land</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 40px;
  gap: 10px;
  &__title {
    font-weight: 800;
    * {
      font-weight: 800;
    }
  }
  &__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
    background: var(--color-accent);
    color: #ffffff;
  }
  &__link {
    display: block;
    height: fit-content;
  }
  &__accent {
    color: var(--color-accent)
  }
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
<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>