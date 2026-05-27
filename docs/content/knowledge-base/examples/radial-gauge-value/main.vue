<template>
  <div class="gauge-container">
    <div class="gauge-wrapper">
      <RadialGauge :pointer="pointer" />
    </div>
    <div class="gauge-value">{{ value }}</div>
  </div>
</template>

<script setup>
import { RadialGauge } from '@progress/kendo-vue-gauges';
import { ref, computed, onMounted } from 'vue';

const value = ref(30);

const pointer = computed(() => ({ value: value.value }));

onMounted(() => {
    setInterval(() => {
        value.value = Math.ceil(Math.random() * 100);
    }, 1000);
});
</script>

<style>
.gauge-value {
  position: relative;
  left: 0;
  right: 0;
  top: -40px;
  text-align: center;
}
</style>
