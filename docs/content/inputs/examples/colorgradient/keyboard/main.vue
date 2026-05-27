<template>
  <div class="example-wrapper">
    <ColorGradient ref="colorPickerRef" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ColorGradient } from "@progress/kendo-vue-inputs";

const colorPickerRef = ref(null);

onMounted(() => {
    colorPickerRef.value.focus();
});
</script>
