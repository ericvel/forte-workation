<script setup lang="ts">
import osloImg from "@/assets/oslo.jpg";
import berlinImg from "@/assets/berlin.jpg";
import krakowImg from "@/assets/krakow.jpg";
import LocationCard from "@/components/LocationCard.vue";

const locations = [
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
      <LocationCard
        v-for="location in locations"
        :key="location.url"
        :location="location"
      />
      <div
        v-for="i in 3"
        :key="i"
        class="h-64 w-64 flex justify-center items-center transition hover:shadow-2xl bg-powder"
      />
    </div>
  </div>
</template>
