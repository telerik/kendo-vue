<template>
  <div>
    <MaskedTextBoxStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <MaskedTextBox
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :style="{ width: '230px' }"
      :mask="'(999) 000-00-00-00'"
      :default-value="'(359) 884-12-33-21'"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import MaskedTextBoxStyleConfigurator from "./MaskedTextBoxStyleConfigurator.vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

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
