<template>
  <div>
    <RangeSlider :step="1" :default-value="{ start: 3, end: 8 }" :min="1" :max="10">
      <SliderLabel :title="'Position 1'" :position="1">Day 1</SliderLabel>
      <SliderLabel :title="'Position 3'" :position="3">Day 3</SliderLabel>
      <SliderLabel :title="'Position 5'" :position="5">Day 5</SliderLabel>
      <SliderLabel :title="'Position 7'" :position="7">Day 7</SliderLabel>
      <SliderLabel :title="'Position 10'" :position="10">Day 10</SliderLabel>
    </RangeSlider>
  </div>
</template>

<script setup>
import { RangeSlider, SliderLabel } from "@progress/kendo-vue-inputs";
</script>
