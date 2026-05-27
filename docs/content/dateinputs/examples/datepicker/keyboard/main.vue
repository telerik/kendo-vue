<template>
  <div class="example-wrapper">
    <DatePicker
      :style="{ width: '230px' }"
      ref="picker"
      :default-value="defaultValue"
    ></DatePicker>
    <p>
      (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
      <code>→</code> to navigate, <code>↑</code> to increment and
      <code>↓</code> to decrement the value)
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

const picker = ref(null);
const defaultValue = ref(new Date());

onMounted(() => {
    picker.value.focus();
});
</script>
