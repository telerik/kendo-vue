<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small: </span>
        <DateTimePicker :style="{ width: '170px' }" :size="'small'" />
      </span>
      <span class="wrapper">
        <span>Medium: </span>
        <DateTimePicker :style="{ width: '170px' }" :size="'medium'" />
      </span>
      <span class="wrapper">
        <span>Large: </span>
        <DateTimePicker :style="{ width: '170px' }" :size="'large'" />
      </span>
    </div>
    <span class="wrapper">
      <span>Custom size:</span>
      <DateTimePicker :class="'custom-datetimepicker'" :size="null" />
    </span>
  </div>
</template>

<script setup>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
</script>

<style>
.custom-datetimepicker {
  height: 40px;
  width: 200px;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
