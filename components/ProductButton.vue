<script setup lang="ts">
const props = defineProps({
  Text: {
    type: String,
    required: true,
  },
  Theme: {
    type: String,
    default: "Light",
  },
});

const ForeColor = ref("text-black");
const BackColor = ref("bg-gray-100");
if (props.Theme == "Black") {
  ForeColor.value = "text-white";
  BackColor.value = "bg-neutral-700";
}
</script>

<template>
  <ClientOnly>
    <div :class="`text-center w-64 py-[10px] rounded-md font-Gotham text-sm font-bold ${BackColor} ${ForeColor} cursor-pointer select-none`">
      <a>{{ props.Text }}</a>
    </div>
  </ClientOnly>
</template>