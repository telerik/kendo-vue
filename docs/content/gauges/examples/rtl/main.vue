<template>
  <div :style="{ direction: 'rtl' }">
    <LinearGauge :pointer="pointer" :scale="scale" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LinearGauge } from '@progress/kendo-vue-gauges';

const pointer = ref({
    value: 30,
});

const scale = ref({
    vertical: false,
    labels: {
        format: 'c',
    },
});
</script>
