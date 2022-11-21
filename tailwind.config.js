/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        dots: ["Dot Matrix Regular"],
        dotsBp: ["BPdots"]
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to top right, rgba(0, 0,0, 0.99), rgba(0, 0,0, 0.9), rgba(0, 0,0, 0.9), rgba(0, 0, 0, 0.3)), url('./assets/bg.png')",
      },
    },
  },
  plugins: [],
};
