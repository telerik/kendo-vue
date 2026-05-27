<template>
  <div>
    <RangeSlider :step="1" :default-value="{ start: 3, end: 8 }" :min="1" :max="10">
      <SliderLabel :position="1">1</SliderLabel>
      <SliderLabel :position="3">3</SliderLabel>
      <SliderLabel :position="5">5</SliderLabel>
      <SliderLabel :position="7">7</SliderLabel>
      <SliderLabel :position="10">10</SliderLabel>
    </RangeSlider>
  </div>
</template>

<script setup>
import { RangeSlider, SliderLabel } from "@progress/kendo-vue-inputs";
</script>
