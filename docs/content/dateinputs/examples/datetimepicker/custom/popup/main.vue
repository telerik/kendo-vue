<template>
  <div :style="{ textAlign: 'center' }">
    <DateTimePicker :style="{ width: '260px' }" ref="datepicker" :popup="CustomPopup" />
  </div>
</template>

<script setup>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import CustomPopup from './CustomPopup.vue';
</script>
