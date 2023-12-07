<script setup lang="ts">
import krakowImg from "@/assets/krakow_big.jpg";
</script>

<template>
  <div class="flex gap-16 my-16 flex-col lg:flex-row">
    <div>
      <h1 class="text-5xl mb-10">Forte Kraków</h1>
      <p class="mb-6">
        We currently rent office space on 4 levels - we move between the second,
        third and fourth floors. Part of the ground floor - Forte Spaces - and
        of course the terrace are also available :)
      </p>
      <p class="mb-6">Krupnicza 331-123<br />Kraków, Poland</p>
      <p class="mb-14">Office Admin: Anna Kaczuro</p>
      <router-link
        to="/booking"
        class="text-2xl border-2 px-6 py-3 hover:bg-grey-light active:bg-grey transition"
        >Book your stay in Kraków</router-link
      >
    </div>
    <img :src="krakowImg" alt="Krakow office employees having fun" class="object-contain shrink" />
  </div>
</template>
