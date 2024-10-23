<template>
  <nav class="fixed w-full p-6 bg-header text-header h-header flex">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto w-full z-50">

      <!-- Header logo -->
      <div class="z-10">
        <LogosBrand/>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden z-10">
        <button v-if="!isOpen" @click="drawer">
          <IconsHamburguer />
        </button>
        <button v-else @click=" isOpen = false">
          <IconsClose />
        </button>
      </div>
      
      <!-- Navbar -->
      <div class="hidden md:block">
        <!-- <li><a href="#" class="active border-b-2 border-blue-500 pb-1">Home</a></li> -->
        <ul class="flex space-x-8 text-sm font-sans items-center">
          <li v-for="(item, index) in headerNav" :key="index">
            <NuxtLink :to="item.link" >
              {{ item.title }}
            </NuxtLink>
          </li>
          <li>
            <a href="" @click.prevent="modal">
              Modal
            </a>
          </li>
          <li>
            <a href="" @click.prevent="loading">
              Loading
            </a>
          </li>
          <ClientOnly>
            <li class="h-12 w-px bg-grayTheme"></li>
            <li v-if="userStore.name">
              Hi, {{ userStore.name }}
            </li>
            <li>
              <ElementsFieldButton :outlined="authStore.isLoggedIn" @click="onSubmit">
                {{ !authStore.isLoggedIn ? 'Sing In/Regiser' : 'Logout' }}
              </ElementsFieldButton>
            </li>          
          </ClientOnly>
        </ul>
      </div>

      <!-- Drawer Menu -->
      <div class="block md:hidden h-header w-full bg-header z-0 absolute -ml-6"></div>
      <aside class="p-5 transform top-0 left-0 w-full bg-header fixed h-full overflow-auto ease-in-out transition-all duration-300 -z-10" :class="isOpen ? 'translate-y-header' : '-translate-y-full'">

        <ul class="divide-y font-sans">
          <li v-for="(item, index) in headerNav" :key="index">
            <NuxtLink :to="item.link" @click="isOpen = false" class="my-4 inline-block">
              {{ item.title }}
            </NuxtLink>
          </li>
          <ClientOnly>
            <li>
              <ElementsFieldButton :outlined="authStore.isLoggedIn" @click="onSubmit" fullWidth class="my-8">
                {{ !authStore.isLoggedIn ? 'Sing In/Regiser' : 'Logout' }}
              </ElementsFieldButton>
            </li>
          </ClientOnly>
        </ul>

        <div class="follow">
          <p class="italic font-sans text-sm">follow us:</p>
          <div class="social flex space-x-5 mt-4 ">
            <IconsSocialIcon v-for="(item, index) in socialLinks" :key="index" :icon="item.icon" :url="item.url" />
          </div>
        </div>

      </aside>

    </div>
  </nav>
</template>


<script setup lang="ts">
import { socialLinks } from '~/utils/datas/socialMedia.data';
import { headerNav } from '~/utils/datas/headerNav.data'

const router = useRouter();
const modalStore = useModalStore();
const loadingStore = useLoadingStore();
const authStore = useAuthStore()
const userStore = useUserStore();

const isOpen = ref(false);

const onSubmit = () => {  
  if(authStore.isLoggedIn) { 
    handleLogout()
  } else {
    router.push('/auth')
  }
}

const modal = () => {
  modalStore.showModal({
    type: 'success',
    title: 'Modal Header',
    message: 'Loren Ipsum Dolor'
  })
}

const loading = () => {
  loadingStore.showLoading()
  setTimeout(() => {
    loadingStore.closeLoading()
    }, 3000);
}

const handleLogout = () => {  
  authStore.logout();  
  router.push('/');   
};


const drawer = () => {
  isOpen.value = !isOpen.value;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    isOpen.value = false;
  }
};

watch(isOpen, (newValue) => {
  if (process.client) {
    if (newValue) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }
  }
}, { immediate: true });

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>
