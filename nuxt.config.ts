// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon"
  ],
  googleFonts: {
    families: {
      'Roboto+Mono': [400, 700], // Body font (Regular, Bold)
      'Inter': [400, 700]        // Heading font (Regular, Bold)
    }
  }
})
