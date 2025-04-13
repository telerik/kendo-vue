<template>
  <div
    :style="{
      direction: 'rtl',
    }"
  >
    <LinearGauge :pointer="pointer" :scale="scale" />
  </div>
</template>

<script>
import { LinearGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
    LinearGauge,
  },
  data() {
    return {
      pointer: {
        value: 30,
      },
      scale: {
        vertical: false,
        labels: {
          format: 'c',
        },
      },
    };
  },
};
</script>
