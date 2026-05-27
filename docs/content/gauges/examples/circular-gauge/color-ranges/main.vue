<template>
  <div class="row">
    <CircularGauge :value="value" :colors="colors" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CircularGauge } from '@progress/kendo-vue-gauges';

const value = ref(8);

const colors = ref([
    { to: 25, color: '#0058e9' },
    { from: 25, to: 50, color: '#37b400' },
    { from: 50, to: 75, color: '#ffc000' },
    { from: 75, color: '#f31700' },
]);

onMounted(() => {
    setInterval(() => {
        value.value = Math.ceil(Math.random() * 100);
    }, 1000);
});
</script>
