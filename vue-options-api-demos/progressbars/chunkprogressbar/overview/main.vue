<template>
  <div>
    <ChunkProgressBar :value="value" />
  </div>
</template>
<script>
import { ChunkProgressBar } from '@progress/kendo-vue-progressbars';

export default {
  components: {
    ChunkProgressBar,
  },
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.handleIncrease();
    }, 800);
  },
  methods: {
    handleIncrease() {
      if (this.value < 100) {
        this.value = this.value + 20;
      } else {
        this.value = 0;
      }
    },
  },
};
</script>
