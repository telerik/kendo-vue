<template>
  <div>
    <RadialGauge :pointer="pointer" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { RadialGauge } from '@progress/kendo-vue-gauges';

const value = ref(30);

const pointer = computed(() => ({
    value: value.value,
}));

onMounted(() => {
    setInterval(() => {
        value.value = Math.ceil(Math.random() * 100);
    }, 1000);
});
</script>
