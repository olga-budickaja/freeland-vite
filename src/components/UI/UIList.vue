<script setup>
  import { ref } from "vue";

  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    dropItems: {
      type: Array,
      required: false
    },
    subItems: {
      type: Array,
      required: false
    },
    type: {
      type: String,
      default: 'flex'
    },
    itemDrop: {
      type: String,
      required: false
    },
    itemSub: {
      type: String,
      required: false
    }
  });

  const isMenuDrop = ref(false);

</script>

<template>

  <ul :class="['list', {'list-column': type === 'column'}]">
    <li
        v-for="item in items"
        :key="item.name"
        :class="['list__item', {'list__drop': item.drop}]"
    >
      <router-link :to="item?.link">{{ $t(`menu.${item.name}`) }}</router-link>
      <div
          v-if="item.drop"
          :class="['list__wrapp', {show: isMenuDrop}]"
      >
        <ul class="list list-column">
          <li
              v-for="dropItem in dropItems"
              :key="dropItem.name"
              class="list__item"
          >
            <router-link :to="dropItem.link">
              {{ $t(`menu.${dropItem.name}`) }}
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="list list-column list__sub" v-else-if="item.sub">
        <li
            v-for="subItem in subItems"
            :key="subItem.name"
            class="list__item"
        >
          <router-link :to="subItem.link">
            {{ $t(`menu.${subItem.name}`) }}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  text-transform: uppercase;
  list-style-type: none;
  &-column {
    flex-direction: column;
    gap: 10px;
  }
  &__item {
    position: relative;
    cursor: pointer;
    padding: 7px 12px;
    border-radius: 7px;
    transition: .5s ease-in-out;
    &:hover {
      background: var(--background-color1);
    }
  }
  &__sub {
    padding: 20px 30px;
    list-style-type: circle;
    border-radius: 7px;
    &:hover {
      background: var(--background-color);
    }
  }
  &__wrapp {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 14px;
    background: var(--background-color);
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    opacity: 0;
    transition: .2s;
  }
  &__drop:hover .list__wrapp {
    opacity: 1;
    pointer-events: auto;
  }
}
.show {
  display: block !important;
}
</style>