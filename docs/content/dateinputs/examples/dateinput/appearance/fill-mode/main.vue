<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <DateInput :style="{ width: '170px' }" :fill-mode="'flat'" />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <DateInput :style="{ width: '170px' }" :fill-mode="'solid'" />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <DateInput :style="{ width: '170px' }" :fill-mode="'outline'" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode:</span>
        <DateInput :class="'custom-dateinput'" :fill-mode="null" />
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
  background-color: #00aead;
  border: 2px solid #bfd843;
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
