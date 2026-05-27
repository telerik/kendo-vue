<template>
  <div class="example-config">
    <p>Select a date:</p>
    <DateTimePicker
      :style="{ width: '260px' }"
      :min="min"
      :max="max"
      :default-value="defaultValue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const min = ref(new Date(2001, 2, 10, 12, 30));
const max = ref(new Date(2002, 2, 10, 12, 30));
const defaultValue = ref(new Date(2001, 2, 10, 12, 45));
</script>
