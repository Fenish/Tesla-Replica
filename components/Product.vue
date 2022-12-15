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
      <div class="absolute z-10 top-0 w-full h-full">
        <Transition appear>
          <div class="flex flex-col justify-center mt-28 select-none">
            <h1 class="m-auto font-Gotham font-bold text-[40px]">{{ props.Title }}</h1>
            <a :href="props.Href" :class="`m-auto text-md ${isLink}`">{{ props.Subtitle }}</a>
          </div>
        </Transition>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.v-enter-active {
  transition: all 1s ease-out;
}

.v-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>