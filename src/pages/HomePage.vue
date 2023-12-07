<script setup lang="ts">
import osloImg from "@/assets/oslo.jpg";
import berlinImg from "@/assets/berlin.jpg";
import krakowImg from "@/assets/krakow.jpg";

interface CityItem {
  name: string;
  image: string;
  url: string;
}

const items: CityItem[] = [
  {
    name: "Oslo",
    image: osloImg,
    url: "/oslo",
  },
  {
    name: "Berlin",
    image: berlinImg,
    url: "/berlin",
  },
  {
    name: "Kraków",
    image: krakowImg,
    url: "/krakow",
  },
];
</script>

<template>
  <div class="flex items-center my-5 flex-col">
    <h1 class="text-5xl mb-14">Forte Booking</h1>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-20">
      <router-link v-for="item in items" :key="item.url" :to="item.url">
        <div
          :style="{
            backgroundImage: 'url(' + item.image + ')',
            backgroundSize: '100% 100%',
          }"
          class="h-64 w-64 flex justify-center items-center transition hover:shadow-2xl"
        >
          <p class="font-nova-cut text-white text-[3.5rem]">
            {{ item.name }}
          </p>
        </div>
      </router-link>
      <div
        v-for="i in 3"
        :key="i"
        class="h-64 w-64 flex justify-center items-center transition hover:shadow-2xl bg-powder"
      />
    </div>
  </div>
</template>
