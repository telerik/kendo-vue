<template>
  <div>
    <NumericTextBox
      :style="{ width: '230px' }"
      :default-value="5"
      :step="3"
    />
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
</script>
