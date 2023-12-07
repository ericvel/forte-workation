<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
</script>

<template>
  <div class="AppLayout">
    <AppHeader />
    <main class="p-16">
      <slot />
    </main>
  </div>
</template>
