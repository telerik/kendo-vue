<template>
  <Chart>
    <ChartTitle :text="'Sales per day'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'Week Days'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem :type="'bar'" :gap="5" :data-items="firstSeries" />
      <ChartSeriesItem :type="'bar'" :data-items="secondSeries" />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartCategoryAxisTitle,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
  },
  data: function () {
    return {
      firstSeries: [1, 2, 3, 5, 4],
      secondSeries: [2, 3, 4, 6, 9],
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    };
  },
};
</script>