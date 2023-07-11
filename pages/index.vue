<script lang="ts" setup>
import bg1 from "~/assets/unsplash_1.jpg";
import bg2 from "~/assets/unsplash_2.jpg";
import bg3 from "~/assets/unsplash_3.jpg";
import bg4 from "~/assets/unsplash_4.jpg";
import bg5 from "~/assets/unsplash_5.jpg";
import bg6 from "~/assets/unsplash_6.jpg";
import bg7 from "~/assets/unsplash_7.jpg";
import bg8 from "~/assets/unsplash_8.jpg";
import bg9 from "~/assets/unsplash_9.jpg";
import bg10 from "~/assets/unsplash_10.jpg";
import bg11 from "~/assets/unsplash_11.jpg";
import bg12 from "~/assets/unsplash_12.jpg";
import bg13 from "~/assets/unsplash_13.jpg";
import bg14 from "~/assets/unsplash_14.jpg";
import bg15 from "~/assets/unsplash_15.jpg";
import bg16 from "~/assets/unsplash_16.jpg";
import bg17 from "~/assets/unsplash_17.jpg";
import bg18 from "~/assets/unsplash_18.jpg";

const randomBg = () => {
  const bgArray = [
    bg1,
    bg2,
    bg3,
    bg4,
    bg5,
    bg6,
    bg7,
    bg8,
    bg9,
    bg10,
    bg11,
    bg12,
    bg13,
    bg14,
    bg15,
    bg16,
    bg17,
    bg18,
  ];
  const randomInteger = Math.floor(Math.random() * 18);
  const baseString =
    "background-size: cover;" +
    "background-repeat: no-repeat;" +
    "background-position: center;";
  const cssStringWithLG =
    "background: linear-gradient(to top right, rgba(0, 0,0, 0.99), rgba(0, 0,0, 0.9), rgba(0, 0,0, 0.9), rgba(0, 0, 0, 0.3)), " +
    `url(${bgArray[randomInteger]});` +
    baseString;
  const cssString =
    `background-image: url(${bgArray[randomInteger]});` + baseString;
  return [cssString, cssStringWithLG];
};

const imageStyle = randomBg();

onMounted(() => {
  document.onmousemove = function (e) {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
    // const lightElement = document.querySelector(".softLight")!;

    // lightElement.style.setProperty("--y", e.clientY + "px");
    // lightElement.setProperty("--x", e.clientY + "px");
  };
  // hover effect
  const clickableElements = document.querySelectorAll(".clickable");
  clickableElements.forEach((elm) => {
    elm.addEventListener("mouseover", function () {
      document.body.classList.add("img-hovered");
    });
    elm.addEventListener("mouseleave", function () {
      document.body.classList.remove("img-hovered");
    });
  });
});
</script>
<template>
  <div
    class="h-screen w-screen text-white font-dotsBp flex-col flex overflow-hidden transition-all relative"
    :style="imageStyle[1]"
  >
    <span class="softLight" />
    <NavigationHeaderBar class="sticky top-0 z-50" />
    <SiteSlogan />
    <SiteSubNotes />
    <div class="absolute bottom-10 right-52 z-50 clickable">
      <MagicHoverCardEffect class="invisible md:visible backdrop-blur-sm">
        <Phone :imageStyle="imageStyle[0]" />
      </MagicHoverCardEffect>
    </div>
  </div>
</template>

<style>
body {
  background-color: black;
  color: #fff;
  cursor: none;
}

body::after {
  content: "";
  position: fixed;
  z-index: 999;
  top: var(--y);
  left: var(--x);
  right: 0;
  bottom: 0;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #fff;

  pointer-events: none;
  transition: width 0.4s ease-in-out;
  transition: height 0.4s ease-in-out;
  font-size: 2rem;
  transform-origin: center;

  mix-blend-mode: difference;
}
.softLight {
  content: "";
  position: fixed;
  z-index: 99;
  top: var(--y);
  left: var(--x);
  right: 0.5em;
  bottom: 0.5em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  transition: width 0.6s ease-in-out;
  transition: height 0.6s ease-in-out;
  font-size: 2rem;

  pointer-events: none;
  box-shadow: 0px 0px 220px 80px rgba(255, 255, 255, 1);
  mix-blend-mode: soft-light;
}
.softLight.img-hovered::after {
  width: 5em;
  height: 5em;
  transition: width 0.6s ease-in-out;
  transition: height 0.6s ease-in-out;
}

body.img-hovered::after {
  width: 5em;
  height: 5em;
  content: "Download";
  text-align: center;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "BPdots";
  font-weight: 100;
  animation: spin 4s infinite forwards cubic-bezier(1, 1, 1, 1);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
