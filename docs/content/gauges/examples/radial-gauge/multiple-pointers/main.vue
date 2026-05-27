<template>
  <div>
    <RadialGauge :pointer="pointer" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RadialGauge } from '@progress/kendo-vue-gauges';

const pointer = ref([
    { value: 10, color: '#ffd246' },
    { value: 20, color: '#28b4c8' },
    { value: 30, color: '#78d237' },
]);
</script>
