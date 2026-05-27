<template>
  <div :style="{ textAlign: 'center' }">
    <DatePicker :style="{ width: '230px' }" :popup="CustomPopup"/>
  </div>
</template>

<script setup>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomPopup from './CustomPopup.vue';
</script>
