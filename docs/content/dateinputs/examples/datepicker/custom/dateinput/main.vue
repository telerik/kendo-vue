<template>
  <DatePicker
    :style="{ width: '260px' }"
    :date-input="customDateInput"
    :default-value="new Date()"
    :width="'270px'"
    :show="true"
  >
    <template #myTemplate="{ props }">
      <CustomDateInput :value="props.value" @change="(e) => props.onChange(e)" />
    </template>
  </DatePicker>
</template>

<script setup>
import CustomDateInput from './CustomDateInput.vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

const customDateInput = 'myTemplate';
</script>
