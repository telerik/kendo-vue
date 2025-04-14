<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointer" :scale="scale" />
    </div>
  </div>
</template>

<script>
import { LinearGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
    LinearGauge,
  },
  computed: {
    pointer() {
      return { value: this.value, shape: this.shape };
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
      shape: 'arrow',
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
