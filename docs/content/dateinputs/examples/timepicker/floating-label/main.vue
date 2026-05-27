<template>
  <div>
    <p>TimePicker</p>
    <TimePicker
      :style="{ width: '230px' }"
      @change="onChangeTimePicker"
      :value="timePickerValue"
      :label="'Select time:'"
      :placeholder="''"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TimePicker } from "@progress/kendo-vue-dateinputs";

const timePickerValue = ref(undefined);

function onChangeTimePicker(e) {
    timePickerValue.value = e.value;
}
</script>
