<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem :data-items="data" :error-bars="errorBars" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      data: [1, 3, 2],
      errorBars: {
        value: function (data) {
          const value = data.value;
          const lowPercentage = value * 0.05;
          const highPercentage = value * 0.1;

          return [lowPercentage, highPercentage];
        },
      },
    };
  },
};
</script>
