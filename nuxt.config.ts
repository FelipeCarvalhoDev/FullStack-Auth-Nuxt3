// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  typescript: {
    strict: true, // Para garantir a tipagem forte no projeto
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})