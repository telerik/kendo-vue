<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointer" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { LinearGauge } from '@progress/kendo-vue-gauges';

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
