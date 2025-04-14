<template>
  <div>
    <RadialGauge :pointer="pointer" :scale="scale" />
  </div>
</template>

<script>
import { RadialGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
    RadialGauge,
  },
  computed: {
    pointer() {
      return { value: this.value };
    },
  },
  mounted() {
    setInterval(() => {
      this.value = Math.ceil(Math.random() * 180);
    }, 1000);
  },
  data() {
    return {
      value: 30,
      scale: {
        minorUnit: 5,
        majorUnit: 20,
        max: 180,
        ranges: [
          {
            from: 80,
            to: 120,
            color: '#ffc700',
          },
          {
            from: 120,
            to: 150,
            color: '#ff7a00',
          },
          {
            from: 150,
            to: 180,
            color: '#c20000',
          },
        ],
      },
    };
  },
};
</script>
