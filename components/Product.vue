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
</script>

<template>
  <ClientOnly>
    <div :id="props.Title.replace(' ', '-')" class="snap-start relative h-screen">
      <img :alt="props.Title" :src="`/img/${props.Background}-Desktop.jpg`" draggable="false" class="md:block hidden object-cover w-screen h-full" />
      <img :alt="props.Title" :src="`/img/${props.Background}-Mobile.jpg`" class="md:hidden block object-cover w-screen h-full" />
    </div>
  </ClientOnly>
</template>