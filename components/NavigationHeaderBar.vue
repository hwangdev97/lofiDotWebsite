<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div
    class="bg-black/20 backdrop-blur-sm px-4 md:px-8 py-2 md:py-4 flex justify-between transition-all text-arcNative select-none"
  >
    <span class="text-arcNative text-lg md:text-2xl flex items-center">
      <nuxt-link :to="localePath('/')"> Lofi.</nuxt-link>
    </span>
    <div class="flex items-center">
      <!-- // Dropdown -->
      <VDropdown class="items-center flex" theme="my-theme">
        <button type="button" class="items-center">
          <img
            class="w-8 h-8 p-2 hover:bg-white/10 rounded transition-all text-arcNative"
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
        class="__cursor_text text-sm md:text-lg font-sans font-black px-6 py-1 transition-all rounded-md hover:bg-white/10 hover:text-green-500"
        data-cursor="block"
      >
        <!--EN: doc https://www.craft.do/s/4TL24QbA2PBGcA  -->
        <!--CN: doc https://www.craft.do/s/BgO3NamYJSAsSA -->
        <a
          :href="
            $i18n.locale == 'zh'
              ? 'https://www.craft.do/s/BgO3NamYJSAsSA'
              : 'https://www.craft.do/s/4TL24QbA2PBGcA'
          "
          target="_blank"
       
        >
          {{ $t("Release") }}
        </a>
      </span>

      <span
        class="__cursor_text text-arcNative text-sm md:text-lg hover:bg-white/10 hover:text-green-500 px-6 py-1 transition-all rounded-md font-sans font-black"
        data-cursor="block"
      >
        <a href="https://apps.apple.com/app/id1628710103">
          {{ $t("Download") }}
        </a>
      </span>
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
