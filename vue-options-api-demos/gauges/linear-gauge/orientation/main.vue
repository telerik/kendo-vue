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

<script>
import { LinearGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
    LinearGauge,
  },
  mounted() {
    setInterval(() => {
      this.value = Math.ceil(Math.random() * 100);
    }, 1000);
  },
  data() {
    return {
      pointerHorizontal: {
        value: 10,
        color: '#ffd246',
      },
      pointerVertical: {
        value: 10,
        color: '#28b4c8',
      },
      scaleVertical: {
        vertical: false,
      },
    };
  },
};
</script>
