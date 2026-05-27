<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointer" :scale="scale" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LinearGauge } from '@progress/kendo-vue-gauges';

const pointer = ref([
    { value: 10, color: '#ffd246', shape: 'arrow' },
    { value: 20, color: '#28b4c8', shape: 'arrow' },
    { value: 30, color: '#78d237', shape: 'arrow' },
]);

const scale = ref({
    minorUnit: 5,
    majorUnit: 20,
    max: 100,
});
</script>
