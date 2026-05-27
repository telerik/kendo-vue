<template>
  <div class="row">
    <p>Today's date:</p>
    <DateTimePicker
      :style="{ width: '260px' }"
      :disabled="true"
      :value="new Date()"
      :show="true"
    />
  </div>
</template>

<script setup>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
</script>
