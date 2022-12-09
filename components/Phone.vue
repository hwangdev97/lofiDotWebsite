<template>
  <div
    class=" bg-black/20 rounded-3xl border-8 border-neutral-800 hover:drop-shadow-2xl transition-all  flex flex-col items-center p-4"
  >
    <header class="flex justify-between  pt-8 pb-4 w-full">
      <span>Lofi.</span>
      <img src="../assets/phone/topRight_icon.svg" alt="" />
    </header>

    <section class="cover w-72 h-72 bg-cover-image bg-cover rounded-md"></section>

    <section class="flex justify-between py-4 w-full">
      <div class="font-dotsBp">
        <p class="text-sm">City Pop</p>
        <p class="text-xs">by some one</p>
      </div>
      <img src="../assets/phone/centerRight_icon.svg" alt="" />
    </section>
    <section class="w-72 h-48 bg-play-control-image bg-contain pb-12">
    </section>
  </div>
</template>
<style>
.phone {
  width: 280px;
  height: 600px;

}
</style>
