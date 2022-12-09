<template>
  <div
    class="bg-hero-pattern h-screen w-screen text-white font-dotsBp flex-col flex overflow-hidden transition-all relative"
  >
    <NavigationHeaderBar class="sticky top-0 z-50" />
    <SiteSlogan />
    <SiteSubNotes />
    <div class="absolute bottom-10 right-52 z-50">
      <MagicHoverCardEffect class="invisible md:visible backdrop-blur-sm">
        <Phone />
      </MagicHoverCardEffect>
    </div>
  </div>
</template>
