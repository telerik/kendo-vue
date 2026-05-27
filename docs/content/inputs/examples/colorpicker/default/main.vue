<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>ColorPicker with default value</p>
      <ColorPicker :default-value="defaultValue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";

const defaultValue = ref("rgba(237, 126, 50, 1)");
</script>
