<template>
  <div>
    <slider :step="1" :default-value="{ start: 3, end: 8 }" :min="1" :max="10">
      <slider-label :title="'Position 1'" :position="1">Day 1</slider-label>
      <slider-label :title="'Position 3'" :position="3">Day 3</slider-label>
      <slider-label :title="'Position 5'" :position="5">Day 5</slider-label>
      <slider-label :title="'Position 7'" :position="7">Day 7</slider-label>
      <slider-label :title="'Position 10'" :position="10">Day 10</slider-label>
    </slider>
  </div>
</template>
<script>
import { RangeSlider, SliderLabel } from '@progress/kendo-vue-inputs';

export default {
  components: {
    slider: RangeSlider,
    'slider-label': SliderLabel,
  },
};
</script>
