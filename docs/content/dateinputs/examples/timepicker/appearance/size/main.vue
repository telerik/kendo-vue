<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small: </span>
        <TimePicker :style="{ width: '170px' }" size="small" />
      </span>
      <span class="wrapper">
        <span>Medium: </span>
        <TimePicker :style="{ width: '170px' }" size="medium" />
      </span>
      <span class="wrapper">
        <span>Large: </span>
        <TimePicker :style="{ width: '170px' }" size="large" />
      </span>
    </div>
    <span class="wrapper">
      <span>Custom size:</span>
      <TimePicker class="custom-timepicker" :size="null" />
    </span>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
</script>

<style>
.custom-timepicker {
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
