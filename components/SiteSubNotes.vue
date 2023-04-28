<script setup>
useSwitchLocalePath();
</script>
<template>
  <div class="p-8 md:p-12 flex-none z-10 transition-all text-arcNative">
    <div class="flex items-center font-sans py-4">
      <a href="https://apps.apple.com/app/id1628710103">
        <span class="clickable">
          <img
            src="../assets/icon_1.png"
            class="w-20 hover:w-24 transition-all"
          />
        </span>
        <!-- <h3 class="hidden text-xl  md:text-2xl lg:text-4xl px-8 transition-all">
        Download from App Store
      </h3> -->
      </a>
    </div>

    <p class="py-4 md:py-10 text-sm md:text-base lg:text-lg">
      I've seen things you people wouldn't believe... <br />
      Attack ships on fire off the shoulder of Orion... <br />
      I watched C-beams glitter in the dark near the Tannhauser Gate. <br />
      All those moments will be lost in time, like tears in rain... <br />
    </p>
    <div class="flex justify-between items-center">
      <span class="text-4xl md:text-4xl lg:text-8xl">Lofi.</span>
      <a
      href="https://www.producthunt.com/posts/lofi-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lofi&#0045;2"
      target="_blank"
      ><img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=377515&theme=dark"
        alt="Lofi&#0046; - Lofi&#0032;music&#0032;and&#0032;time&#0045;tracking | Product Hunt"
        style="width: 250px; height: 54px"
        width="250"
        height="54"
    /></a>
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
