<script lang="ts">
import { initCursor } from 'ipad-cursor'
import type { IpadCursorConfig, IpadCursorStyle } from 'ipad-cursor'

const normalStyle: IpadCursorStyle = { background: 'transparent' }
 
const config: IpadCursorConfig = {
  normalStyle,
 
};
initCursor(config)

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>