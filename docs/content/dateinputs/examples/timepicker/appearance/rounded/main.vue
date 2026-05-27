<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <TimePicker :style="{ width: '170px' }" rounded="small" />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <TimePicker :style="{ width: '170px' }" rounded="medium" />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <TimePicker :style="{ width: '170px' }" rounded="large" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <TimePicker :style="{ width: '170px' }" rounded="full" />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <TimePicker class="custom-timepicker" :rounded="'none'" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
</script>

<style>
.custom-timepicker {
  width: 200px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
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
