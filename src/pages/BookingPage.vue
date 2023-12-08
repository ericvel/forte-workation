<script setup lang="ts">
import { ref } from "vue";
import TextField from "@/components/TextField.vue";
const countryToVisit = ref("");
const countryOfOrigin = ref("");
const date = ref("");
const name = ref("");
const phoneNumber = ref("");
const email = ref("");
const otherInquiries = ref("");
</script>

<template>
  <div class="lg:w-3/5 xl:w-2/5 flex flex-col gap-y-16">
    <h1 class="text-[40px]">Book your stay</h1>
    <p class="text-xl">
      Please request your stay through this form. The office admin will contact
      you for additional details and confirmation.
    </p>

    <form class="flex flex-col gap-y-14">
      <TextField v-model="name" id="name" label="Name" />
      <TextField v-model="phoneNumber" id="phoneNumber" label="Phone number" />
      <TextField v-model="email" id="email" label="E-mail" />
      <TextField
        v-model="otherInquiries"
        id="otherInquiries"
        label="Other inquiries"
        text-area
      />
      <div class="flex gap-x-6 items-center">
        <input type="checkbox" id="contact-checkbox" class="w-6 h-6" />
        <label for="contact-checkbox" class="text-lg">
          I want people to know that I am coming to this office.
        </label>
      </div>
    </form>
  </div>
</template>
