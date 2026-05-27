<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointer" :scale="scale" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { LinearGauge } from '@progress/kendo-vue-gauges';

const value = ref(30);
const shape = ref('arrow');

const pointer = computed(() => ({
    value: value.value,
    shape: shape.value,
}));

const scale = ref({
    minorUnit: 5,
    majorUnit: 20,
    max: 180,
    ranges: [
        { from: 80, to: 120, color: '#ffc700' },
        { from: 120, to: 150, color: '#ff7a00' },
        { from: 150, to: 180, color: '#c20000' },
    ],
});

onMounted(() => {
    setInterval(() => {
        value.value = Math.ceil(Math.random() * 180);
    }, 1000);
});
</script>
