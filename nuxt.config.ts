import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  target: 'static',
  buildModules: [
    'nuxt-windicss',
  ],
})
