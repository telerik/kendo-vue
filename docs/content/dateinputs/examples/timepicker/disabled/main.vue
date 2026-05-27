<template>
  <div class="row">
    <p>Today's date:</p>
    <TimePicker
      :style="{ width: '230px' }"
      :disabled="true"
      :value="new Date()"
      :show="true"
    />
  </div>
</template>

<script setup>
import { TimePicker } from "@progress/kendo-vue-dateinputs";
</script>
