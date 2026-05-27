<template>
  <div>
    <div>
      <p>Select a date:</p>
      <DatePicker
        :style="{ width: '230px' }"
        :min="min"
        :max="max"
        :default-value="defaultValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

const min = ref(new Date(2000, 2, 10));
const max = ref(new Date(2002, 2, 10));
const defaultValue = ref(new Date(2001, 2, 10));
</script>
