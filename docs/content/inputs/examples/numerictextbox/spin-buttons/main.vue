<template>
  <div>
    <NumericTextBox
      :style="{ width: '230px' }"
      :default-value="5"
      :spinners="false"
      :step="2"
    />
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
</script>
