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
    <KInput
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
import { Input as KInput } from "@progress/kendo-vue-inputs";

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
