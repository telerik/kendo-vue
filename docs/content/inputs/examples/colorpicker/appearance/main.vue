<template>
  <div>
    <ColorPickerConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <ColorPicker :size="size" :fill-mode="fillMode" :rounded="rounded" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ColorPicker } from "@progress/kendo-vue-inputs";
import ColorPickerConfigurator from "./ColorPickerConfigurator.vue";

const size = ref("medium");
const rounded = ref("medium");
const fillMode = ref("solid");

const setSize = (event) => {
    size.value = event.value;
};

const setRounded = (event) => {
    rounded.value = event.value;
};

const setFillMode = (event) => {
    fillMode.value = event.value;
};
</script>
