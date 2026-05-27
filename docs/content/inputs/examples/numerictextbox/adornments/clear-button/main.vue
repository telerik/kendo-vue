<template>
  <div>
    <NumericTextBox :style="{ width: '230px' }" :show-clear-button="true" :default-value="1" />
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
</script>
