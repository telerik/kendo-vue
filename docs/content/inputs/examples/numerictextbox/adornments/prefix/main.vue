<template>
  <div>
    <NumericTextBox :style="{ width: '230px' }" :inputPrefix="'prefix'">
      <template #prefix>
        <InputIcons />
      </template>
    </NumericTextBox>
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import InputIcons from "./InputIcons.vue";
</script>
