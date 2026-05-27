<template>
  <TimePicker
    :style="{ width: '230px' }"
    :date-input="customDateInput"
    :default-value="new Date()"
    :width="'180px'"
  >
    <template #myTemplate="{ props }">
      <CustomDateInput :value="props.value" @change="(e) => props.onChange(e)" />
    </template>
  </TimePicker>
</template>

<script setup>
import { TimePicker } from "@progress/kendo-vue-dateinputs";
import CustomDateInput from "./CustomDateInput.vue";

const customDateInput = "myTemplate";
</script>
