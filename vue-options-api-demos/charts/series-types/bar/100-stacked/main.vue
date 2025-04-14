<template>
  <Chart>
    <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'New clients per day'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :name="'Jane'"
        :type="'bar'"
        :stack="{ type: '100%' }"
        :data-items="firstSeries"
      />
      <ChartSeriesItem
        :name="'John'"
        :type="'bar'"
        :data-items="secondSeries"
      />
      <ChartSeriesItem
        :name="'George'"
        :type="'bar'"
        :data-items="thirdSeries"
      />
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
  ChartCategoryAxisTitle,
  ChartLegend,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    ChartLegend,
  },
  data: function () {
    return {
      firstSeries: [1, 2, 3],
      secondSeries: [1, 3, 1],
      thirdSeries: [1, 5, 3],
      categories: [
        new Date(),
        new Date().setDate(new Date().getDate() + 1),
        new Date().setDate(new Date().getDate() + 2),
      ],
    };
  },
};
</script>