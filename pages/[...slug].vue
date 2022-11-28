<template>
  <main class="bg-black">
    <NavigationHeaderBar class="font-dotsBp sticky top-0 z-50" />
    <div class="flex items-center justify-center ">
      <ContentDoc
        class="pageContentStyle text-white/90 p-2 md:p-6 md:max-w-2xl items-center"
      />
    </div>
  </main>
</template>
<style lang="scss">
.pageContentStyle {
  h1 {
    font-size: 1.8rem;
    line-height: 2rem;
    padding-bottom: 1.5rem;
    padding-top: 1.8rem;
  }
  h2 {
    font-size: 1.1rem;
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-bottom: 0.5rem;
    padding-top: 1.5rem;
  }
  h4 {
    font-size: 0.9rem;
  }
  p, li{
    font-size: 0.9rem;
    padding: 0.5rem 0;
    color: aliceblue;
  }
}
</style>
