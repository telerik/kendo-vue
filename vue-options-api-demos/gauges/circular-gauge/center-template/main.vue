<template>
  <div class="row">
    <CircularGauge
      :value="value"
      :colors="colors"
      :center-render="'myTemplate'"
    >
      <template v-slot:myTemplate="{ props }">
        <h3
          :style="{
            color: props.color,
          }"
        >
          {{ props.value }}%
        </h3>
      </template>
    </CircularGauge>
  </div>
</template>

<script>
import { CircularGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
    CircularGauge,
  },
  mounted() {
    setInterval(() => {
      this.value = Math.ceil(Math.random() * 100);
    }, 1000);
  },
  data() {
    return {
      value: 8,
      colors: [
        {
          to: 25,
          color: '#0058e9',
        },
        {
          from: 25,
          to: 50,
          color: '#37b400',
        },
        {
          from: 50,
          to: 75,
          color: '#ffc000',
        },
        {
          from: 75,
          color: '#f31700',
        },
      ],
    };
  },
};
</script>
