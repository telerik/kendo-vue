<template>
  <div>
    <p>DateTimePicker</p>
    <DateTimePicker
      :style="{ width: '260px' }"
      :label="'Select date and time:'"
      @change="onChangeDateTimePicker"
      :value="dateTimePickerValue"
      :placeholder="''"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const dateTimePickerValue = ref(undefined);

function onChangeDateTimePicker(e) {
    dateTimePickerValue.value = e.value;
}
</script>
