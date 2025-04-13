<template>
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories" />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem :type="'verticalArea'" :data-items="positiveSeries" />
      <ChartSeriesItem :type="'verticalArea'" :data-items="negativeSeries" />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      categories: ["Jan", "Feb", "Mar", "Apr"],
      positiveSeries: [1, 2, 3, 5],
      negativeSeries: [-1, -2, -3, -5],
    };
  },
};
</script>