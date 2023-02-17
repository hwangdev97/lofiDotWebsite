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
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
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
      charset: "utf-8",
      title: "Lofi. - lofi & time-tracking",
      meta: [
        {
          name: "description",
          content: "Track your creative journey with the Lofi.",
        },
        {
          hid: "og-image",
          property: "og:image",
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
        { hid: "twitter:site", name: "twitter:site", content: "lofidot.com" },
        {
          hid: "twitter:Card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://lofidot.com",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Lofi. - music and time-tracking",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Track your creative journey with the Lofi.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://lofidot.com/twitterImage.png",
        },
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
