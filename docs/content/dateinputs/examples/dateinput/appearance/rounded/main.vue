<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>None roundness: </span>
        <DateInput :style="{ width: '170px' }" :rounded="'none'" />
      </span>
      <span class="wrapper">
        <span>Small roundness: </span>
        <DateInput :style="{ width: '170px' }" :rounded="'small'" />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <DateInput :style="{ width: '170px' }" :rounded="'medium'" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Large roundness: </span>
        <DateInput :style="{ width: '170px' }" :rounded="'large'" />
      </span>
      <span class="wrapper">
        <span>Full roundness: </span>
        <DateInput :style="{ width: '170px' }" :rounded="'full'" />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <DateInput :class="'custom-dateinput'" :rounded="'none'" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { DateInput } from '@progress/kendo-vue-dateinputs';
</script>

<style>
.custom-dateinput {
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
