<template>
  <DatePicker
    :style="{ width: '230px' }"
    :calendar="customCalendar"
    format="MM/yyyy"
  >
    <template #myTemplate="{ props }">
      <CustomCalendar
        :value="props.value"
        @change="(ev) => props.onChange(ev)"
      />
    </template>
  </DatePicker>
</template>

<script setup>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomCalendar from './CustomCalendar.vue';

const customCalendar = 'myTemplate';
</script>
