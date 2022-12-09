// plugins/floating-vue.ts
// https://github.com/Akryum/floating-vue/issues/912
import { defineNuxtPlugin } from "#app";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

export default defineNuxtPlugin(({ vueApp }) => {
  // Get localized path for homepage
  vueApp.use(FloatingVue, {
    themes: {
      "my-theme": {
        $extend: "dropdown",
        triggers: ["click"],
        autoHide: true,
        placement: "auto",
      },
    },
  });
});
