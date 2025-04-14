<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :type="'area'"
        :data-items="firstSeries"
        :color="'green'"
        :opacity="0.5"
      />
      <ChartSeriesItem
        :type="'area'"
        :data-items="secondSeries"
        :color="'blue'"
        :opacity="0.5"
      />
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
    ChartSeriesItem
  },
  data: function () {
    return {
      firstSeries: [1, 1, 1],
      secondSeries: [1, 0, -1],
    };
  },
};
</script>