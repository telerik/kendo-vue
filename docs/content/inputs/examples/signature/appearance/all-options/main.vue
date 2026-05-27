<template>
  <div>
    <SignatureStyleConfigurator
      :color="color"
      @colorchange="setColor"
      :background-color="backgroundColor"
      @backgroundchange="setBackground"
      :stroke-width="strokeWidth"
      @strokewidthchange="setStroke"
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <Signature
        :style="{ minWidth: '330px', minHeight: '150px' }"
        :size="size"
        :rounded="rounded"
        :fill-mode="fillMode"
        :stroke-width="strokeWidth"
        :background-color="backgroundColor"
        :color="color"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SignatureStyleConfigurator from "./SignatureStyleConfigurator.vue";
import { Signature } from "@progress/kendo-vue-inputs";

const size = ref("medium");
const rounded = ref("medium");
const fillMode = ref("solid");
const strokeWidth = ref(3);
const backgroundColor = ref("#fff");
const color = ref("#000");

function setRounded(event) {
    rounded.value = event.value;
}

function setSize(event) {
    size.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
}

function setStroke(event) {
    strokeWidth.value = event.value;
}

function setBackground(event) {
    backgroundColor.value = event.value;
}

function setColor(event) {
    color.value = event.value;
}
</script>
