<script setup lang="ts">
import AppHeader from './AppHeader.vue';
</script>

<template>
  <div class="AppLayout">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
