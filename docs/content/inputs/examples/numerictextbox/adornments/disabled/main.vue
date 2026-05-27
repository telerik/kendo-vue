<template>
  <div>
    <NumericTextBox
      :style="{ width: '230px' }"
      :disabled="true"
      :inputIconName="'gear'"
      :showValidationIcon="true"
      :inputPrefix="'prefix'"
      :inputSuffix="'suffix'"
      :showClearButton="true"
    >
      <template #prefix>
        <InputIcons />
      </template>
      <template #suffix>
        <span class="k-input-icon k-icon k-i-gear"></span>
      </template>
    </NumericTextBox>
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import InputIcons from "./InputIcons.vue";
</script>
