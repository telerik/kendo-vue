<template>
  <DateTimePicker
    :style="{ width: '260px' }"
    :date-input="customDateInput"
    :default-value="new Date()"
    :width="'270px'"
  >
    <template #myTemplate="{ props }">
      <CustomDateInput :value="props.value" @change="(e) => props.onChange(e)" />
    </template>
  </DateTimePicker>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import CustomDateInput from './CustomDateInput.vue';

const customDateInput = ref('myTemplate');
</script>
