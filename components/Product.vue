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
var BackgroundDesktop = "";
var BackgroundMobile = "";
if (process.client) {
  BackgroundDesktop = new URL("../assets/img/" + props.Background + "-Desktop.jpg", import.meta.url).href;
  BackgroundMobile = new URL("../assets/img/" + props.Background + "-Mobile.jpg", import.meta.url).href;
}

var isLink = "";
if (props.Href) {
  isLink = "underline";
}
</script>

<template>
  <ClientOnly>
    <div :id="props.Title.replace(' ', '-')" class="snap-start relative h-screen">
      <img :alt="props.Title" :src="BackgroundDesktop" draggable="false" class="md:block hidden object-cover w-screen h-full" />
      <img :alt="props.Title" :src="BackgroundMobile" draggable="false" class="md:hidden block object-cover w-screen h-full" />
    </div>
  </ClientOnly>
</template>