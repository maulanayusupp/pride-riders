import tailwindcss from '@tailwindcss/vite'

const SITE_TITLE = 'PRIDE Official Community | One Block, One Brotherhood'
const SITE_DESCRIPTION =
  'PRIDE (Permata Riders Independent & Dedicated Enthusiast) — komunitas riders Permata Cimahi yang menjunjung persaudaraan, keselamatan, dan rasa hormat. Setiap perjalanan adalah cerita. More Than A Ride.'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // Kosong = otomatis pakai domain yang sedang serve website.
      // Bisa di-set permanen lewat env: NUXT_PUBLIC_SITE_URL=https://domainresmi.id
      siteUrl: '',
    },
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: 'Bebas Neue', provider: 'google', weights: [400] },
      { name: 'Oswald', provider: 'google', weights: [400, 500, 600] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: SITE_TITLE,
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: SITE_DESCRIPTION },
        {
          name: 'keywords',
          content:
            'PRIDE Community, Permata Cimahi, Motor Community Bandung, Touring Bandung, Brotherhood Community, Riding Community, Safety Riding, Community Journey, Komunitas Motor Cimahi, Touring Lembang',
        },
        { name: 'author', content: 'PRIDE Community' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#090909' },
        { name: 'application-name', content: 'PRIDE Community' },
        { name: 'apple-mobile-web-app-title', content: 'PRIDE' },
        // Open Graph & Twitter (og:url, og:image, canonical) di-set dinamis
        // di app/pages/index.vue agar selalu mengikuti domain aslinya.
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
