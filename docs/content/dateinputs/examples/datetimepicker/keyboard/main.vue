<template>
  <div class="example-wrapper">
    <DateTimePicker
      :style="{ width: '260px' }"
      :default-value="value"
    />
    <p>
      (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
      <code>→</code> to navigate, <code>↑</code> to increment and
      <code>↓</code> to decrement the value)
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date(2020, 2, 10));
</script>
