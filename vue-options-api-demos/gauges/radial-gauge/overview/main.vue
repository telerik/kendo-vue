<template>
  <div>
    <RadialGauge :pointer="pointer" />
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
      this.value = Math.ceil(Math.random() * 100);
    }, 1000);
  },
  data() {
    return {
      value: 30,
    };
  },
};
</script>
