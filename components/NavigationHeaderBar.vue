<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div
    class="bg-black/20 backdrop-blur-sm px-4 md:px-8 py-2 md:py-4 flex justify-between transition-all"
  >
    <span class="text-white text-lg md:text-2xl flex items-center clickable">
      <nuxt-link :to="localePath('/')"> Lofi.</nuxt-link>
    </span>
    <div class="flex items-center">
      <VDropdown class="items-center flex" theme="my-theme">
        <button type="button" class="items-center">
          <img
            class="w-8 h-8 p-2 hover:bg-white/10 rounded transition-all"
            src="../assets/language.svg"
            alt=""
          />
        </button>

        <template #popper>
          <div class="flex flex-col bg-white/5">
            <NuxtLink
              class="px-8 py-2 hover:bg-white/10 rounded transition-all"
              :to="switchLocalePath('en')"
              >English</NuxtLink
            >
            <NuxtLink
              class="px-8 py-2 hover:bg-white/10 rounded transition-all"
              :to="switchLocalePath('zh')"
              >中文</NuxtLink
            >
          </div>
        </template>
      </VDropdown>

      <span
        class="text-white text-sm md:text-lg hover:bg-white/10 hover:text-green-500 px-6 py-1 transition-all rounded-md font-sans font-black"
        >{{ $t("Download") }}</span
      >
    </div>
  </div>
</template>
<style>
/* Style */
.v-popper--theme-my-theme .v-popper__inner {
  background: #000000;
  color: #ffffff;
  padding: 12px;
  border: 1px #1f1f1f solid;
}

.v-popper--theme-my-theme .v-popper__arrow-outer {
  border-color: #1f1f1f;
}

.v-popper--theme-my-theme .v-popper__arrow-inner {
  border-color: #000000;
}
</style>
