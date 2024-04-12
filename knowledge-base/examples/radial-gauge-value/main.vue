<template>
    <div class="gauge-container">
      <div class="gauge-wrapper">
        <RadialGauge :pointer="pointer" />
      </div>
      <div class="gauge-value">{{ value }}</div>
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
  <style scoped>
  .gauge-value {
    position: relative;
    left: 0;
    right: 0;
    top: -40px;
    text-align: center;
  }
  </style>
  