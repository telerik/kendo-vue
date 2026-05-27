<template>
  <div class="example-wrapper">
    <TimePicker :style="{ width: '230px' }" />
    <p>
      (use Alt+<code>↓</code> to open the time list, <code>↑</code> to increment and <code>↓</code> to decrement the value)
    </p>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
</script>
