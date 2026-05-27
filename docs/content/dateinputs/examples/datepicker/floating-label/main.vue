<template>
  <div>
    <p>DatePicker</p>
    <DatePicker
      :style="{ width: '230px' }"
      :label="'Select date:'"
      @change="onChangeDatePicker"
      :value="datePickerValue"
      :placeholder="''"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

const datePickerValue = ref(undefined);

function onChangeDatePicker(e) {
    datePickerValue.value = e.value;
}
</script>
