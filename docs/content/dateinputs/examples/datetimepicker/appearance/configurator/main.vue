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
      <DateTimePicker
        :style="{ width: '260px' }"
        :size="size"
        :fill-mode="fillMode"
        :rounded="rounded"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DateInputsStyleConfigurator from "./DateInputsStyleConfigurator.vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

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
