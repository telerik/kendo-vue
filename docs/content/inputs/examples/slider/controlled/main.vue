<template>
  <div>
    <Slider
      :step="1"
      :min="1"
      :max="10"
      :value="value"
      @change="onChange"
    >
      <SliderLabel
        v-for="value in [1, 3, 5, 6, 10]"
        :key="value"
        :title="value.toString()"
        :position="value"
        @click="handleClick(value)"
      />
    </Slider>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Slider, SliderLabel } from "@progress/kendo-vue-inputs";

const value = ref(7);

function onChange(event) {
    value.value = event.value;
}

function handleClick(val) {
    value.value = val;
}
</script>
