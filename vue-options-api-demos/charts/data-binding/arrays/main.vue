<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem :data-items="seriesData" :type="'bubble'" />
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
      seriesData: [
        [1, 1, 10],
        [2, 2, 20],
        [3, 3, 30],
      ],
    };
  },
};
</script>