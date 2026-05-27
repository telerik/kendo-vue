<template>
  <div>
    <NumericTextBox :style="{ width: '230px' }" :inputPrefix="'prefix'">
      <template #prefix>
        <div>
          &nbsp; &nbsp; &nbsp;
          <InputSeparator />
        </div>
      </template>
    </NumericTextBox>
  </div>
</template>

<script setup>
import { NumericTextBox, InputSeparator } from "@progress/kendo-vue-inputs";
</script>
