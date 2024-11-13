// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/color-mode',
      {
        preference: 'light',
        classPrefix: '--'
      }
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/content',
    '@pinia/nuxt',
    // [
    //   '@pinia/nuxt',
    //   {
    //     autoImports: [
    //       // automatically imports `defineStore`
    //       'defineStore', // import { defineStore } from 'pinia'
    //       // automatically imports `defineStore` as `definePiniaStore`
    //       ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    //     ]
    //   }
    // ]
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: {
    global: true,
    dirs: ['~/components/elements']
  },
  css: [
    '@/assets/css/main.scss'
  ],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  typescript: {
    shim: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: '@use "~/assets/css/mixins/_fonts-mixins" as *;'
        }
      }
    }
  },
  // https://nitro.unjs.io/config
  // nitro: {
  //   preset: 'node-server',
  // }
  // tailwindcss: {
  //   cssPath: '~/assets/css/tailwind.css',
  //   configPath: 'tailwind.config.js',
  //   exposeConfig: false,
  //   config: {},
  //   injectPosition: 0,
  //   viewer: true,
  // },
  // colorMode: {
  //   classSuffix: '',
  // },
  compatibilityDate: '2024-11-07',
})