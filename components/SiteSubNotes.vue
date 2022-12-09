<script setup>
useSwitchLocalePath();
</script>
<template>
  <div class="p-8 md:p-12 flex-none z-10 transition-all">
    <div class="flex items-center font-sans py-4">
      <img src="../assets/icon_1.png" class="w-20 hover:w-24 transition-all" />
      <!-- <h3 class="hidden text-xl  md:text-2xl lg:text-4xl px-8 transition-all">
        Download from App Store
      </h3> -->
    </div>
    <p class="py-4 md:py-10 text-sm md:text-base lg:text-lg">
      I've seen things you people wouldn't believe... <br />
      Attack ships on fire off the shoulder of Orion... <br />
      I watched C-beams glitter in the dark near the Tannhauser Gate. <br />
      All those moments will be lost in time, like tears in rain... <br />
    </p>
    <div class="flex justify-between items-center">
      <span class="text-4xl md:text-4xl lg:text-8xl">Lofi.</span>
      <div class="flex flex-col text-xs md:text-base font-black font-sans">
        <span class="p-1 md:p-3 hover:text-green-500">
          <nuxt-link :to="localePath('/useragreement')">
            {{ $t("UserAgreement") }}
          </nuxt-link>
        </span>
        <span class="p-1 md:p-3 hover:text-green-500">
          <nuxt-link :to="localePath('/privacypolicy')">
            {{ $t("privacypolicy") }}
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>
