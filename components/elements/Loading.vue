<template>
  <transition name="fade" mode="out-in" appear>
    <div v-if="loading.show">

      <div class="modal_mask" ></div>

      <div class="modal_wrapper">
        
        <span class="loader"></span>
        
      </div>
    </div>
    
  </transition>
</template>

<script setup lang="ts">
const loading = useLoadingStore();

</script>

<style scoped>
@tailwind components;

@layer components {
  .loader {
    @apply relative w-12 h-12 block m-auto z-50;
    @apply text-white;
    @apply box-border;
    animation: rotation 1s linear infinite;
  }
  .loader::after,
  .loader::before {
    content: '';
    @apply box-border absolute w-6 h-6 top-0;
    @apply bg-white rounded-full;
    animation: scale50 1s infinite ease-in-out;
  }
  .loader::before {
    @apply top-auto bottom-0 bg-primaryLight;
    animation-delay: 0.5s;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes scale50 {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

</style>