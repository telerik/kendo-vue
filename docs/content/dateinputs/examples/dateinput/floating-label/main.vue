<template>
  <div>
    <p>DateInput</p>
    <DateInput
      :style="{ width: '230px' }"
      :label="'Enter date:'"
      @change="onChangeDateInput"
      :placeholder="''"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const dateInputValue = ref();

function onChangeDateInput(e) {
    dateInputValue.value = e.value;
}
</script>
