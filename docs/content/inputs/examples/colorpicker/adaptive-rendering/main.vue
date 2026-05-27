<template>
  <div class="example-wrapper">
    <ColorPicker
      :adaptive="true"
      :adaptive-title="'Choose color'"
      :default-value="defaultValue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const defaultValue = ref("rgba(237, 126, 50, 1)");
</script>
