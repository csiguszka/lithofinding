import tailwindcss from "@tailwindcss/vite";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true,
  app: {
    baseURL: "/lithofinding/",
    buildAssetsDir: "assets",
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    "@pinia/nuxt",
    "@vueuse/motion/nuxt"
  ],
  alias: {
    assets: "/<rootDir>/assets"
  },
});
