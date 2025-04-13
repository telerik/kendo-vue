<template>
  <div>
    <slider :step="1" :default-value="{ start: 3, end: 8 }" :min="1" :max="10">
      <slider-label :position="1">1</slider-label>
      <slider-label :position="3">3</slider-label>
      <slider-label :position="5">5</slider-label>
      <slider-label :position="7">7</slider-label>
      <slider-label :position="10">10</slider-label>
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
