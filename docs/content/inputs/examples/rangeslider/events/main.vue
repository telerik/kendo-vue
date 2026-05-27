<template>
  <div>
    <RangeSlider
      :step="1"
      :default-value="{ start: 3, end: 8 }"
      :min="1"
      :max="10"
      @change="onChange"
    >
      <SliderLabel :position="1">1</SliderLabel>
      <SliderLabel :position="3">3</SliderLabel>
      <SliderLabel :position="5">5</SliderLabel>
      <SliderLabel :position="7">7</SliderLabel>
      <SliderLabel :position="10">10</SliderLabel>
    </RangeSlider>
    <br />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RangeSlider, SliderLabel } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const events = ref([]);

function onChange(ev) {
    events.value.unshift(
        `Change event triggered. Start value: ${ev.value.start.toFixed(2)}. End value: ${ev.value.end.toFixed(2)}.`
    );
}
</script>
