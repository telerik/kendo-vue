<template>
  <div>
    <DateInputsStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <div class="example-config">
      <TimePicker
        :style="{ width: '230px' }"
        :size="size"
        :fill-mode="fillMode"
        :rounded="rounded"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DateInputsStyleConfigurator from './DateInputsStyleConfigurator.vue';
import { TimePicker } from '@progress/kendo-vue-dateinputs';

const size = ref('medium');
const rounded = ref('medium');
const fillMode = ref('solid');

const setRounded = (event) => {
    rounded.value = event.value;
};

const setSize = (event) => {
    size.value = event.value;
};

const setFillMode = (event) => {
    fillMode.value = event.value;
};
</script>
