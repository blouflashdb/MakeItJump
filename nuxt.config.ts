// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/eslint-module", "@nuxtjs/i18n", "@vueuse/nuxt"],
  runtimeConfig: {
    public: {
      i18n: {
        baseUrl: "",
      },
    },
  },
  ssr: false,
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "de", iso: "de-DE", file: "de.json" },
    ],
    lazy: true,
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "prefix_and_default",
  },
});
