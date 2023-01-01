// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    shim: false
  },
  // https://nitro.unjs.io/config
  // nitro: {
  //   preset: 'node-server',
  // }
})
