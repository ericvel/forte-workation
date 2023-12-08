<script setup lang="ts">
interface Location {
  name: string;
  image: string;
  url: string;
}

defineProps<{ location: Location }>();
</script>

<template>
  <router-link :to="location.url">
    <div
      class="h-64 w-64 flex justify-center items-center transition hover:shadow-2xl relative group overflow-hidden"
    >
      <img
        :src="location.image"
        alt="Krakow office employees having fun"
        class="object-contain w-full h-full group-hover:scale-110 transition duration-200 ease-in-out brightness-75 group-hover:brightness-90"
        aria-hidden="true"
      />
      <p class="font-nova-cut text-white text-[3.5rem] absolute shadow-2xl">
        {{ location.name }}
      </p>
    </div>
  </router-link>
</template>
