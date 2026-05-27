<template>
  <div class="example-wrapper">
    <ColorPalette ref="colorPaletteRef" :default-value="value" />
    <p>
      (use <code>←↓↑→</code> to navigate, <code>enter</code> to select the
      value)
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ColorPalette } from "@progress/kendo-vue-inputs";

const value = ref("rgba(237, 126, 50, 1)");
const colorPaletteRef = ref(null);

onMounted(() => {
    colorPaletteRef.value.focus();
});
</script>
