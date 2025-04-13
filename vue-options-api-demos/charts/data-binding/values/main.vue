<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem :data-items="seriesData" />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
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