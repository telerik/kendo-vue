<template>
  <div>
    <ButtonStyleConfigurator
      :shape="shape"
      @shapechange="setShape"
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <KButton
      :shape="shape"
      :size="size"
      :theme-color="themeColor"
      :fill-mode="fillMode"
      :rounded="rounded"
    >
      Button
    </KButton>
  </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';
import ButtonStyleConfigurator from './ButtonStyleConfigurator.vue';
import { ref } from 'vue';

const shape = ref('rectangle');
const size = ref('medium');
const themeColor = ref('base');
const fillMode = ref('solid');
const rounded = ref('medium');

function setShape(newShape) {
    shape.value = newShape;
}

function setSize(event) {
    size.value = event.value;
}

function setThemeColor(event) {
    themeColor.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
}

function setRounded(event) {
    rounded.value = event.value;
}
</script>
