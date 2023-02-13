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
        strategy: "prefix_and_default",
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
  app: {
    head: {
      charset: "utf-16",
      title: "Lofi. - music and time-tracking",
      meta: [
        {
          name: "description",
          content: "Track your creative journey with the Lofi.",
        },
        {
          hid: "og-image",
          property: "og: image",
          content: "https://lofidot.com/ogimage.png",
        },
        {
          hid: "og-title",
          property: "og:title",
          content: "Lofi. - music and time-tracking",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content: "Track your creative journey with the Lofi.",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in", // default
    },
  },
});
