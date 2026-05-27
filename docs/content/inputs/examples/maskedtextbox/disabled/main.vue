<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :mask="mask"
      :value="value"
      :disabled="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const mask = ref("aaaaaaaaaaaaaaaaa");
const value = ref("Andrew Green");
</script>
