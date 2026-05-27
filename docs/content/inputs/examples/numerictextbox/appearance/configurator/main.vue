<template>
  <div>
    <NumericTextBoxStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <NumericTextBox
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :style="{ width: '200px' }"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NumericTextBoxStyleConfigurator from "./NumericTextBoxStyleConfigurator.vue";
import { NumericTextBox } from "@progress/kendo-vue-inputs";

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
