<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { Product } from "~~/.nuxt/components";

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
if (props.Href) {
  isLink = "underline";
}
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

const Button1Text = ref("Buy Now");
const Button2Text = ref("Custom Order");
if (!props.Title.includes("Model")) {
  Button1Text.value = "Order Now";
  Button2Text.value = "Learn More";
}
</script>

<template>
  <ClientOnly>
    <div :id="props.Title.replace(' ', '-')" class="snap-start relative h-screen">
      <div class="absolute top-32 w-full" ref="TitleAnimation">
        <div class="flex flex-col">
          <h1 class="m-auto font-Gotham font-bold text-[40px] select-none">{{ Title }}</h1>
          <a :href="Href" :class="`m-auto text-md select-none ${isLink}`">{{ Subtitle }}</a>
        </div>
      </div>
      <div class="absolute bottom-28 w-full">
        <div v-if="props.Title != `Accessories`">
          <div class="flex m-auto gap-8 justify-center flex-col sm:flex-row items-center">
            <div v-motion :initial="{ opacity: 0, x: -100 }" :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }" :delay="500">
              <ProductButton :Text="Button1Text" Theme="Black" />
            </div>
            <div v-motion :initial="{ opacity: 0, x: 100 }" :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }" :delay="500">
              <ProductButton :Text="Button2Text" />
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex m-auto gap-8 justify-center">
            <div v-motion :initial="{ opacity: 0, x: 100 }" :enter="{ opacity: 1, x: 0, transition: { duration: 500 } }" :delay="500">
              <ProductButton Text="Shop Now" Theme="Black" />
            </div>
          </div>
        </div>
      </div>
      <nuxt-img quality="80" :alt="props.Title" :src="DesktopImg" draggable="false" class="md:block hidden object-cover w-screen h-full select-none" format="webp" />
      <nuxt-img quality="80" :alt="props.Title" :src="MobileImg" draggable="false" class="md:hidden block object-cover w-screen h-full select-none" format="webp" />
    </div>
  </ClientOnly>
</template>