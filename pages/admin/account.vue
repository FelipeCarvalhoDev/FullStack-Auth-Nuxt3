<template>
  <div class="bg-primaryLight flex items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">MY ACCOUNT</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: true,
  admin: true,
  layout: 'admin',
});

</script>

<style scoped>

</style>