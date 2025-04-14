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
  data() {
    return {
      pointer: [
        {
          value: 10,
          color: '#ffd246',
        },
        {
          value: 20,
          color: '#28b4c8',
        },
        {
          value: 30,
          color: '#78d237',
        },
      ],
    };
  },
};
</script>
