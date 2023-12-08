<script setup lang="ts">
import ForteLogo from "./ForteLogo.vue";
import HeaderMenu from "./HeaderMenu.vue";
import { RouterLink } from "vue-router";

const chateauPages = [
  { label: "About", url: "/chateau/about" },
  { label: "Guest rooms", url: "/chateau/rooms" },
  { label: "Food offerings", url: "/chateau/food" },
  { label: "Activities", url: "/chateau/activities" },
  { label: "Guidelines", url: "/chateau/guidelines" },
];

const officePages = [
  { label: "Oslo", url: "/oslo" },
  { label: "Copenhagen", url: "/copenhagen" },
  { label: "Berlin", url: "/berlin" },
  { label: "Kraków", url: "/krakow" },
  { label: "Katowice", url: "/katowice" },
];
</script>

<template>
  <header class="bg-black flex justify-between items-center h-[72px] px-16">
    <router-link to="/">
      <ForteLogo />
    </router-link>
    <div class="flex gap-10 h-full items-center">
      <HeaderMenu label="Chateau de Buros" :items="chateauPages" />
      <HeaderMenu label="Offices" :items="officePages" />
      <router-link
        to="/booking"
        class="text-grey-light border-2 border-white px-5 hover:bg-black-dull active:bg-grey transition leading-8"
      >
        Book your stay
      </router-link>
    </div>
  </header>
</template>
