<template>
  <div>
    <h6>Decimal</h6>
    <NumericTextBox
      :style="{ width: '230px' }"
      :format="'n2'"
      :default-value="value"
    />
    <h6>Percentage</h6>
    <NumericTextBox
      :style="{ width: '230px' }"
      :format="'p'"
      :default-value="percentage"
      :min="0"
      :max="1"
      :step="0.1"
    />
    <h6>Currency</h6>
    <NumericTextBox
      :style="{ width: '230px' }"
      :default-value="value"
      :format="'c2'"
      :min="0"
    />
    <h6>Currency with format options</h6>
    <NumericTextBox
      :style="{ width: '230px' }"
      :default-value="value"
      :min="0"
      :format="formatOptions"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NumericTextBox } from "@progress/kendo-vue-inputs";

const value = ref(5);
const percentage = ref(0.7);
const formatOptions = {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "name",
};
</script>
