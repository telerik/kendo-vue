<template>
  <DateRangePicker
    :start-date-input="CustomStartDateInput"
    :end-date-input="CustomEndDateInput"
  />
</template>

<script setup>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import CustomStartDateInput from "./CustomStartDateInput.vue";
import CustomEndDateInput from "./CustomEndDateInput.vue";
</script>
