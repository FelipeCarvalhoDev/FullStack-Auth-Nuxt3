<template>
  <div>
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <div>
      <input
        v-model="value"
        :type="type" 
        :id="id" 
        :disabled="disabled" 
        :class="
          clsx(
            'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 outline-none',
            disabled && 'opacity-50 cursor-default'
          )
        "
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import clsx from 'clsx';

interface InputProps {
  label: string;
  id: string;
  modelValue: string | number;
  name: string;
  type?: string;
  required?: boolean;
  disabled?: boolean; 
}

const props = defineProps<InputProps>();
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

</script>

<style scoped>

</style>