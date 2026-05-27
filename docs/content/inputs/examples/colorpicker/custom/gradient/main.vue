<template>
  <div>
    <ColorPicker
      :default-value="selectedColor"
      :view="'gradient'"
      :gradient-settings="gradientSettings"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const selectedColor = ref("rgba(237, 126, 50, 1)");
const gradientSettings = ref({
    opacity: false,
});
</script>
