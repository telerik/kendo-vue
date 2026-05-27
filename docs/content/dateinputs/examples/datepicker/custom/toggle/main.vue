<template>
  <div :style="{ textAlign: 'center' }">
    <DatePicker
      :style="{ width: '230px' }"
      :toggle-button="'myTemplate'"
    >
      <template #myTemplate="{ props }">
        <CustomToggleButton @click="(ev) => props.onClick(ev)" />
      </template>
    </DatePicker>
  </div>
</template>

<script setup>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomToggleButton from './CustomToggleButton.vue';
</script>
