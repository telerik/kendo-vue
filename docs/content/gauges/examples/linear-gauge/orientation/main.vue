<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointerHorizontal" />
    </div>
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointerVertical" :scale="scaleVertical" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { LinearGauge } from '@progress/kendo-vue-gauges';

const pointerHorizontal = ref({
    value: 10,
    color: '#ffd246',
});

const pointerVertical = ref({
    value: 10,
    color: '#28b4c8',
});

const scaleVertical = ref({
    vertical: false,
});

onMounted(() => {
    setInterval(() => {
        pointerHorizontal.value.value = Math.ceil(Math.random() * 100);
        pointerVertical.value.value = Math.ceil(Math.random() * 100);
    }, 1000);
});
</script>
