<script setup lang="ts">
import { useMotion } from "@vueuse/motion";

const props = defineProps({
  Title: {
    type: String,
    required: true,
  },
  Subtitle: {
    type: String,
  },
  Background: {
    type: String,
  },
  Href: {
    type: String,
  },
});

const TitleAnimation = ref();
const DesktopImg = new URL(`../assets/img/${props.Background}-Desktop.jpg`, import.meta.url).href;
const MobileImg = new URL(`../assets/img/${props.Background}-Mobile.jpg`, import.meta.url).href;
var isLink = "";
onMounted(() => {
  console.log(props.Href);
  if (props.Href) {
    isLink = "underline";
  }
});

useMotion(TitleAnimation, {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
    },
  },
});
</script>

<template>
  <ClientOnly>
    <div :id="props.Title.replace(' ', '-')" class="snap-start relative h-screen">
      <div class="absolute top-32 w-full" ref="TitleAnimation">
        <div class="flex flex-col">
          <h1 class="m-auto font-Gotham font-bold text-[40px]">{{ Title }}</h1>
          <a :href="Href" :class="`m-auto text-md ${isLink}`">{{ Subtitle }}</a>
        </div>
      </div>
      <nuxt-img :alt="props.Title" :src="DesktopImg" draggable="false" class="md:block hidden object-cover w-screen h-full" format="webp" />
      <nuxt-img :alt="props.Title" :src="MobileImg" draggable="false" class="md:hidden block object-cover w-screen h-full" format="webp" />
    </div>
  </ClientOnly>
</template>