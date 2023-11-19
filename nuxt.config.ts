// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=League+Spartan&display=swap" }
    ]
  },
  modules: ['@pinia/nuxt', "@nuxt/image"],
})