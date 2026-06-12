import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
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
      title: 'PRIDE Official Community | One Block, One Brotherhood',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Website resmi PRIDE (Permata Riders Independent & Dedicated Enthusiast). Komunitas yang menjunjung tinggi persaudaraan, keselamatan, dan perjalanan penuh cerita.',
        },
        {
          name: 'keywords',
          content:
            'PRIDE Community, Permata Cimahi, Motor Community Bandung, Touring Bandung, Brotherhood Community, Riding Community, Safety Riding, Community Journey',
        },
        { name: 'theme-color', content: '#090909' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'PRIDE Official Community | One Block, One Brotherhood' },
        {
          property: 'og:description',
          content:
            'Komunitas yang menjunjung tinggi persaudaraan, keselamatan, dan perjalanan penuh cerita. More Than A Ride.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
