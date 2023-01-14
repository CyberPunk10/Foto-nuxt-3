// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/color-mode', {
      preference: 'light',
      classPrefix: '--',
    }],
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
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
  // https://nitro.unjs.io/config
  // nitro: {
  //   preset: 'node-server',
  // }
  // tailwindcss: {
  //   cssPath: '~/assets/css/tailwind.css',
  //   configPath: 'tailwind.config.js',
  //   exposeConfig: false,
  //   // config: {},
  //   injectPosition: 0,
  //   viewer: true,
  // },
  // colorMode: {
  //   classSuffix: '',
  // },
})
