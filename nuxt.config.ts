// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/color-mode', {
      preference: 'light',
      classPrefix: '--',
    }],
    '@nuxtjs/tailwindcss',
  ],
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
