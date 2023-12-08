<script setup lang="ts">
const props = defineProps<{
  label: string;
  id: string;
  modelValue: string;
  textArea?: boolean;
}>();

const dropdownId = `dropdown-${props.id}`;

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label :for="dropdownId" class="text-2xl font-medium">{{ label }}</label>
    <select
      :id="dropdownId"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="border-black border h-16 px-4 text-xl"
      :class="{ 'h-36': textArea }"
    >
      <option value="Norway">Norway</option>
      <option value="Denmark">Denmark</option>
      <option value="Poland">Poland</option>
      <option value="Germany">Germany</option>
      <option value="France">France</option>
    </select>
  </div>
</template>
