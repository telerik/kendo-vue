<template>
  <div>
    <TextAreaStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <TextArea
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :style="{ width: '200px' }"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextAreaStyleConfigurator from "./TextAreaStyleConfigurator.vue";
import { TextArea } from "@progress/kendo-vue-inputs";

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
