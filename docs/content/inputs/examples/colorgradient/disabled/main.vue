<template>
  <div>
    <ColorGradient :default-value="value" :disabled="true" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorGradient } from "@progress/kendo-vue-inputs";

const value = ref("rgba(237, 126, 50, 1)");
</script>
