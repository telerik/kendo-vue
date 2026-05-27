<template>
  <div>
    <InputStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <KTextBox
      :style="{ width: '230px' }"
      :size="size"
      :rounded="rounded"
      :fill-mode="fillMode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputStyleConfigurator from "./InputStyleConfigurator.vue";
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";

const size = ref("medium");
const rounded = ref("medium");
const fillMode = ref("solid");

function setRounded(event) {
    rounded.value = event.value;
}

function setSize(event) {
    size.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
}
</script>
