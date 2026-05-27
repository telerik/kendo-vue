<template>
  <div>
    <p>Enter phone number</p>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :mask="mask"
      :default-value="defaultValue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const mask = ref("0000-0000-0000-0000");
const defaultValue = ref("5748-1570-0019-4334");
</script>
