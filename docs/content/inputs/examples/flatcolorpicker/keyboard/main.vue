<template>
  <div class="example-wrapper">
    <FlatColorPicker ref="colorPickerRef" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FlatColorPicker } from "@progress/kendo-vue-inputs";

const colorPickerRef = ref(null);
</script>
