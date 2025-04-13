<template>
  <ChunkProgressBar :value="value" :style="{ width: '450px' }" />
</template>
<script>
import { ChunkProgressBar } from '@progress/kendo-vue-progressbars';

export default {
  components: {
    ChunkProgressBar,
  },
  data() {
    return {
      value: 40,
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
