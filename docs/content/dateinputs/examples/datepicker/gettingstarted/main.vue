<template>
  <div class="example-wrapper">
    <DatePicker :style="{ width: '230px' }" />
    <p>
      (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
      <code>→</code> to navigate, <code>↑</code> to increment and
      <code>↓</code> to decrement the value)
    </p>
  </div>
</template>

<script setup>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
</script>
