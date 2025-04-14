<template>
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories" />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem :data-items="seriesData" />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";


export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [20, 40, 45, 30, 50],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    };
  },
};
</script>