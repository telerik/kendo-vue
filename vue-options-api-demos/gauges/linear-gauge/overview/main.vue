<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <LinearGauge :pointer="pointer" />
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
