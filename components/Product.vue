<script setup lang="ts">
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
/*
IMAGES WITH IMPORT
MAYBE I WILL USE THIS LATER

const DesktopImg = new URL(`../assets/img/${props.Background}-Desktop.jpg`, import.meta.url).href;
const MobileImg = new URL(`../assets/img/${props.Background}-Mobile.jpg`, import.meta.url).href;
*/
</script>

<template>
  <ClientOnly>
    <div :id="props.Title.replace(' ', '-')" class="snap-start relative h-screen">
      <nuxt-img :alt="props.Title" :src="`/img/${props.Background}-Desktop.jpg`" draggable="false" class="md:block hidden object-cover w-screen h-full" format="webp" />
      <nuxt-img :alt="props.Title" :src="`/img/${props.Background}-Mobile.jpg`" draggable="false" class="md:hidden block object-cover w-screen h-full" format="webp" />
    </div>
  </ClientOnly>
</template>