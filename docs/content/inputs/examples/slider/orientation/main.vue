<template>
  <div>
    <Slider
      :vertical="true"
      :buttons="true"
      :step="1"
      :default-value="7"
      :min="1"
      :max="10"
    >
      <SliderLabel :position="1">1</SliderLabel>
      <SliderLabel :position="3">3</SliderLabel>
      <SliderLabel :position="5">5</SliderLabel>
      <SliderLabel :position="7">7</SliderLabel>
      <SliderLabel :position="10">10</SliderLabel>
    </Slider>
  </div>
</template>

<script setup>
import { Slider, SliderLabel } from "@progress/kendo-vue-inputs";
</script>
