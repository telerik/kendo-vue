<template>
  <div>
    <DropDownStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <ComboBox
      :style="{ width: '230px' }"
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :data-items="[
        'X-Small',
        'Small',
        'Medium',
        'Large',
        'X-Large',
        '2X-Large',
      ]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DropDownStyleConfigurator from './DropDownStyleConfigurator.vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const size = ref('medium');
const rounded = ref('medium');
const fillMode = ref('solid');

function setSize(event) {
    size.value = event.value;
}

function setRounded(event) {
    rounded.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
}
</script>
