<template>
  <div>
    <slider
      :step="1"
      :default-value="{ start: 3, end: 8 }"
      :min="1"
      :max="10"
      @change="onChange"
    >
      <slider-label :position="1">1</slider-label>
      <slider-label :position="3">3</slider-label>
      <slider-label :position="5">5</slider-label>
      <slider-label :position="7">7</slider-label>
      <slider-label :position="10">10</slider-label>
    </slider>
    <br />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { RangeSlider, SliderLabel } from '@progress/kendo-vue-inputs';
import Logger from './Logger.vue';

export default {
  components: {
    slider: RangeSlider,
    'slider-label': SliderLabel,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    onChange(ev) {
      this.events.unshift(
        'Change event triggered. Start value:' +
          ev.value.start.toFixed(2) +
          '. End value: ' +
          ev.value.end.toFixed(2) +
          '.'
      );
    },
  },
};
</script>
