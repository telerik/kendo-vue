// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/global.css',
    '@progress/kendo-theme-material/dist/material-main-dark.css',
    '@progress/kendo-theme-utils/dist/all.css',
  ],
  app: {
    baseURL: '/vue-personal-finance-nuxt/'
  }
})
