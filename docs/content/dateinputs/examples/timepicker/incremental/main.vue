<template>
  <div class="example-wrapper">
    <p>Select a time:</p>
    <TimePicker
      :style="{ width: '230px' }"
      :format="'HH:mm:ss'"
      :steps="steps"
      :default-value="defaultValue"
    />
    <p>(↑ to increment and ↓ to decrement the value)</p>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import { reactive } from 'vue';

const steps = reactive({
    hour: 2,
    minute: 15,
    second: 30,
});

const defaultValue = new Date(2000, 2, 10, 10, 30);
</script>
