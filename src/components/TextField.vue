<script setup lang="ts">
const props = defineProps<{
  label: string;
  id: string;
  modelValue: string;
  textArea?: boolean;
}>();

const textFieldId = `text-field-${props.id}`;

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <label :for="textFieldId" class="text-2xl font-medium">{{ label }}</label>
    <input
      :id="textFieldId"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="border-black border h-16 px-4 text-xl"
      :class="{ 'h-36': textArea }"
    />
  </div>
</template>
