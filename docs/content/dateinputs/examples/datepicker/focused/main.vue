<template>
  <DatePicker
    :style="{ width: '230px' }"
    :focused-date="new Date(1997, 2, 20)"
  />
</template>

<script setup>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
</script>
