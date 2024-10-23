<template>
  <ElementsModal />
  <ElementsLoading />
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
import { generateMeta } from '@/utils/constants/generateMeta';

useHead({
  title: 'Title of Website',
  meta: generateMeta(),
  htmlAttrs: {
    lang: 'pt-BR',
  },
  script: [],
  link: []
})

import { useAuthStore } from './stores/auth.store';

const authStore = useAuthStore();
authStore.initializeStore();

</script>

<style>

</style>
