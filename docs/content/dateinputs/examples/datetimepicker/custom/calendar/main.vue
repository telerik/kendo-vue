<template>
  <DateTimePicker :style="{ width: '260px' }" :calendar="customCalendar">
    <template #myTemplate="{ props }">
      <CustomCalendar :value="props.value" @change="(ev) => props.onChange(ev)" />
    </template>
  </DateTimePicker>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import CustomCalendar from './CustomCalendar.vue';

const customCalendar = ref('myTemplate');
</script>
