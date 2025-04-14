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
  mounted() {
    setInterval(() => {
      this.value = Math.ceil(Math.random() * 100);
    }, 1000);
  },
  data() {
    return {
      pointer: [
        {
          value: 10,
          color: '#ffd246',
          shape: 'arrow',
        },
        {
          value: 20,
          color: '#28b4c8',
          shape: 'arrow',
        },
        {
          value: 30,
          color: '#78d237',
          shape: 'arrow',
        },
      ],
    };
  },
};
</script>
