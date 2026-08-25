// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: [
    '@progress/kendo-theme-meridian/dist/meridian-main-dark.css',
    '~/assets/styles/global.css',
  ],
  app: {
    baseURL: '/vue-personal-finance-nuxt/'
  },
  nitro: {
    preset: 'static'
  }
})
