<template>
  <div>
    <RangeSlider :step="1" :min="1" :max="10" :value="value" @change="onChange">
      <SliderLabel
        v-for="value in [1, 3, 5, 6, 10]"
        :key="value"
        :title="value.toString()"
        :position="value"
        @click="handleClick(value)"
      >
        {{ value }}
      </SliderLabel>
    </RangeSlider>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RangeSlider, SliderLabel } from "@progress/kendo-vue-inputs";

const value = ref({ start: 3, end: 8 });

function onChange(event) {
    value.value = event.value;
}

function handleClick(clickedValue) {
    value.value = clickedValue;
}
</script>
