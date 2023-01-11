<script lang="ts" setup>
import { computed } from "vue";
const lineWords: SloganItem[] = [
  {
    title:
      "Having a dream engine is not difficult, but it is difficult to persist in realizing one's dreams.",
    index: 1,
  },
  {
    title: "Stimulating creativity with Lofi.",
    index: 2,
  },
  {
    title: "Track your creative journey with the Lofi.",
    index: 3,
  },
  {
    title: "Explore new soundscapes and keep track of your creative process with our Lofi.",
    index: 4,
  },
  {
    title: "Record every creative moment with our Lofi player and time-tracking capabilities",
    index: 5,
  },
  {
    title: "Lofi music and time tracking: The perfect duo for your creative process",
    index: 6,
  }
];

let n = 0;
let activeIndex = ref(1)
 
const tm = setInterval(() => {
  console.log("interval", activeIndex);
  if (n < lineWords.length) {
    n = n + 1;
    activeIndex.value = n;
  } else {
    n = 0;
    activeIndex.value = 1;
  }
}, 1000);

onMounted(() => {
  tm;
});

onUnmounted(() => {
  clearInterval(tm);
});
</script>
<template>
  <div class="p-8 md:p-12 grow transition-all">
    <h3 class="text-lg md:text-2xl show-word">
      Play on your mobile device and record time
    </h3>
    <h2 class="text-3xl md:text-4xl lg:text-4xl">
      <h3
        v-for="line in lineWords"
        :key="line.index"
        :class="activeIndex == line.index ? 'show-word' : 'hidden-word'"
      >
        {{ line.title }}
      </h3>
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.show-word {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateY(0rem);
  
}

.hidden-word {
  height: 0px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateY(0.2rem);
}
</style>
