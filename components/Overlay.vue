
<script setup lang="ts">
onMounted(() => {
  console.log("Overlay mounted");
  document.addEventListener("scroll", () => {
    console.log("scrolling");
  });
});

onUnmounted(() => {
  console.log("Overlay unmounted");
});
</script>

<template>
  <div class="fixed w-screen h-screen z-10">
    <div class="flex justify-center">
      <h1>OVERLAY COMPONENT</h1>
    </div>
  </div>
</template>
