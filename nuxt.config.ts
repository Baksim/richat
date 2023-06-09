export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        {
          src: '/js/bootstrap.bundle.min.js',
          type: "text/javascript"
        }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Richat'
    },
  },

  css: ["@/assets/css/bootstrap.min.css"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: [
    '@nuxtjs/supabase',
    '@nuxt/image-edge',
    '@kevinmarrec/nuxt-pwa',
    '@averjs/nuxt-compression',
    '@nuxt-modules/compression',
    'nuxt-delay-hydration'
  ],

  nitro: {
    compressPublicAssets: {
      brotli: true
    },
  },

  delayHydration: {
    debug: process.env.NODE_ENV === 'development',
    mode: 'mount'
  },

  pwa: {
    workbox: {
      enabled: true
    },
    manifest: {
      name: 'Richat',
      short_name: 'Richat',
      lang: 'en'
    },
    meta: {
      title: 'Richat',
      lang: 'en'
    }
  },
})
