<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Float } from "@headlessui-float/vue";
import { RouterLink } from "vue-router";

interface MenuItem {
  label: string;
  url: string;
}

defineProps<{ label: string; items: MenuItem[] }>();
</script>

<template>
  <Menu>
    <Float placement="bottom">
      <MenuButton
        class="h-full text-grey-light flex items-center gap-x-2 px-2 hover:bg-black-dull transition"
      >
        <span class="">{{ label }}</span>
        <vue-feather type="chevron-down" />
      </MenuButton>
      <MenuItems class="w-48 flex flex-col bg-black">
        <MenuItem
          v-for="item in items"
          :as="RouterLink"
          :to="item.url"
          class="text-white py-2 px-2 ui-active:bg-black-dull transition"
        >
          {{ item.label }}
        </MenuItem>
      </MenuItems>
    </Float>
  </Menu>
</template>
