<script lang="ts" setup></script>
<template>
  <div class="flex flex-col">
    <img
      class="h-28 w-32 md:h-32 md:w-44 mx-auto my-28"
      src="../assets/footerImage.png"
      alt=""
    />

    <div class="flex justify-between items-center text-white">
      <div>
        <span class="font-dotsBp text-xs md:text-xl p-6">
          <a href="/">Lofi</a>
        </span>
        <div class="dot-animation"></div>
      </div>

      <div class="flex flex-row text-xs md:text-sm md:font-black font-sans p-6">
        <span class="p-3 hover:text-green-500">
          <a href="/useragreement_en"> {{ $t("UserAgreement") }} </a>
        </span>
        <span class="p-3 hover:text-green-500">
          <a href="/privacypolicy_en"> {{ $t("privacypolicy") }} </a>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.dot-animation {
  width: 10px;
  height: 10px;
  color: rgb(34 197 94);
}
</style>
