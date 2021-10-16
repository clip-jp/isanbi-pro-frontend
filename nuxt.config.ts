import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  target: 'static',
  router: {
    base: '/isanbi-pro-frontend/'
  }
})
