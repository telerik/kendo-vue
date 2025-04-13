<template>
  <div>
    <slider :step="1" :min="1" :max="10" :value="value" @change="onChange">
      <slider-label
        :title="value.toString()"
        :key="value"
        @click="handleClick(value)"
        :position="value"
        v-for="value in [1, 3, 5, 6, 10]"
      >
        {{ value }}
      </slider-label>
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
  data() {
    return {
      value: {
        start: 3,
        end: 8,
      },
    };
  },
  methods: {
    onChange(event) {
      this.value = event.value;
    },
    handleClick(value) {
      this.value = value;
    },
  },
};
</script>
