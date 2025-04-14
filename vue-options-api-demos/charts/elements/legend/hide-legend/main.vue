<template>
  <div>
    <Chart>
      <ChartLegend :visible="false" />
      <ChartSeries>
        <ChartSeriesItem :name="'Fibonacci'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [1, 2, 3, 5],
    };
  },
};
</script>
