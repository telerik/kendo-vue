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
  data: function () {
    return {
      data: [1, 3, 2],
      errorBars: { value: [0.5, 1] },
    };
  },
};
</script>
