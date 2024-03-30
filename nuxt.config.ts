// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    preload: true,
    families: {
      '"Plus Jakarta Sans"': {
        wght: '200..800'
      },
      Inter: {
        wght: '100..900'
      }
    }
  },
  css: ['~/assets/css/main.css']
})
