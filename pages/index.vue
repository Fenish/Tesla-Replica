<script setup lang="ts">
useHead(() => ({
  title: "Electric Cars, Solar & Clean Energy | Tesla",
  meta: [
    {
      name: "description",
      content: "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
}));

var products = [
  { Title: "Model 3", Subtitle: "Schedule a Test Drive", Background: "Model-3-Bg-Image", Href: "#" },
  { Title: "Model Y", Subtitle: "Schedule a Test Drive", Background: "Model-Y-Bg-Image", Href: "#" },
  { Title: "Model S", Subtitle: "Schedule a Test Drive", Background: "Model-S-Bg-Image", Href: "#" },
  { Title: "Model X", Subtitle: "Schedule a Test Drive", Background: "Model-X-Bg-Image", Href: "#" },
  { Title: "Solar Panels", Subtitle: "Lowest Cost Solar Panels in America", Background: "Solar-Panels" },
  { Title: "Solar Roof", Subtitle: "Produce Clean Energy From Your Roof", Background: "Solar-Roof" },
  { Title: "Accessories", Background: "Accessories" },
];
</script>


<template>
  <div>
    <Navbar />
    <div id="Products" class="snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth">
      <LazyProduct v-for="product in products" :key="product.Title" :Title="product.Title" :Subtitle="product.Subtitle" :Background="product.Background" :Href="product.Href" />
    </div>
  </div>
</template>


<style scoped>
::-webkit-scrollbar {
  width: 0;
}
</style>