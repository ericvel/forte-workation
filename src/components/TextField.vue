<script setup lang="ts">
const props = defineProps<{
  label: string;
  id: string;
  modelValue: string;
  variant?: "text" | "area" | "select" | "date";
}>();

const textFieldId = `text-field-${props.id}`;

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label :for="textFieldId" class="text-2xl font-medium">{{ label }}</label>
    <div
      class="relative flex items-center"
      :class="{ 'w-80': variant === 'select' || variant === 'date' }"
    >
      <input
        :id="textFieldId"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :placeholder="
          variant === 'select'
            ? 'Select country'
            : variant === 'date'
              ? 'Select date'
              : undefined
        "
        class="border-black border h-16 px-4 text-xl w-full"
        :class="{
          'h-36': variant === 'area',
          'cursor-pointer': variant === 'select',
        }"
      />
      <vue-feather
        v-if="variant === 'select'"
        type="chevron-down"
        class="absolute right-4 pointer-events-none"
      />
      <vue-feather
        v-if="variant === 'date'"
        type="calendar"
        class="absolute right-4 pointer-events-none"
      />
    </div>
  </div>
</template>
