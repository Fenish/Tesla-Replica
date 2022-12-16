
<script setup lang="ts">
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const ProductData: any = props.products;
const Title = ref(ProductData[0].Title);
const Subtitle = ref(ProductData[0].Subtitle);
const Href = ref(ProductData[0].Href);
var isLink = "underline";

const isTitleShown = ref(true);
onMounted(() => {
  var container = document.getElementById("Products");
  container?.addEventListener("scroll", () => {
    isTitleShown.value = false;
    var childs = container?.children!;
    for (var i = 0; i < childs?.length; i++) {
      var child = childs[i];
      if (child.getBoundingClientRect().top == 0) {
        var product = ProductData[i];
        Title.value = String(product.Title);
        Subtitle.value = product.Subtitle ? String(product.Subtitle) : "";
        Href.value = product.Href ? String(product.Href) : "";
        isTitleShown.value = true;
        if (Href.value != "") {
          isLink = "underline";
        } else {
          isLink = "";
        }
      }
    }
  });
});
onUnmounted(() => {
  var container = document.getElementById("Products");
  container?.removeEventListener("scroll", () => {});
});
</script>

<template>
  <div class="fixed z-10 w-full mt-28">
    <Transition appear>
      <div v-if="isTitleShown" class="flex flex-col justify-center select-none">
        <h1 class="m-auto font-Gotham font-bold text-[40px]">{{ Title }}</h1>
        <a :href="Href" :class="`m-auto text-md ${isLink}`">{{ Subtitle }}</a>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active {
  transition: all 0.5s ease-out;
}

.v-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>