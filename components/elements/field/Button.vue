<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="
      clsx(
        'btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ',
        disabled && 'btn-disabled',
        fullWidth && 'w-full',
        outlined && 'btn-outlined',
        danger && '',
      )
    "
  >
    <slot v-if="!disabled" />
    <IconsLoading v-else />
  </button>
</template>

<script setup lang="ts">
import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  outlined?: boolean;
  danger?: boolean;
  disabled?: boolean;
}
const props = defineProps<ButtonProps>();
</script>

<style scoped></style>