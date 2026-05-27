<template>
  <div class="example-wrapper">
    <DateRangePicker
      :valid="rangePickerValidation"
      @change="rangePickerChange"
    />
    <div v-if="!rangePickerValidation">
      <span class="k-text-error" style="font-style: italic; font-size: 10px">
        * Start date should be before End date
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';

const rangePickerValidation = ref(true);

const rangePickerChange = (ev) => {
    rangePickerValidation.value = ev.value.start < ev.value.end;
};
</script>
