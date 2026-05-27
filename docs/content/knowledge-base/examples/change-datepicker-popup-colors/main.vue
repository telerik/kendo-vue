<template>
  <div :style="{ textAlign: 'center' }">
    <DatePicker :popup="customPopup">
      <template #myTemplate="{ props }">
        <Custom :show="props.show" />
      </template>
    </DatePicker>
  </div>
</template>

<script setup>

import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomPopup from './CustomPopup.vue';

const customPopup = CustomPopup;
</script>

<style>
.k-datepicker {
  width: 15em;
}
</style>
