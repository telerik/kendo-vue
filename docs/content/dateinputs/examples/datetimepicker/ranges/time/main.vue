<template>
  <div class="example-config">
    <p>Select a date:</p>
    <DateTimePicker
      :style="{ width: '260px' }"
      :min-time="minTime"
      :max-time="maxTime"
      :default-value="defaultValue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const minTime = ref(new Date(2000, 1, 1, 8, 30));
const maxTime = ref(new Date(2000, 1, 1, 17, 30));
const defaultValue = ref(new Date(2019, 10, 8, 8, 15));
</script>
