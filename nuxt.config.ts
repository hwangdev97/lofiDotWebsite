// https://nuxt.com/docs/api/configuration/nuxt-config
import en from "./locales/en.json";
import zh from "./locales/zh.json";

export default defineNuxtConfig({
  modules: [
    "@nuxt/image-edge",
    "@nuxt/content",
    [
      "@nuxtjs/i18n",
      {
        /* i18n config  */
        vueI18n: {
          legacy: false,
          locale: "en",
          messages: {
            en: en,
            zh: zh,
          },
        },
        locales: [
          {
            code: "en",
            iso: "en-US",
          },
          {
            code: "zh",
            iso: "zh-CN",
          },
        ],
        strategy: "prefix_except_default",
        defaultLocale: "en",
        fallbackLocale: ["en", "zh"],
      },
    ],
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {},
});
