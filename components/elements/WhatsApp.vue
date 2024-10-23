<template>
  <div class="container relative flex justify-end z-0">
    <div class="fixed bottom-24">
      <NuxtLink :href="whatsApp" target="_blank" aria-label="WhatsApp Link">
        <Icon name="logos:whatsapp-icon" size="60" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { whatsApp } from '~/utils/datas/whatsapp.data'


</script>

<style scoped>

</style>