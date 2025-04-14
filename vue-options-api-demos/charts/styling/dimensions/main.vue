<template>
  <Chart
    :style="{
      width: '300px',
      height: '200px',
    }"
  >
    <ChartTitle :text="'Units sold'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'Months'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :type="'bar'"
        :gap="2"
        :spacing="0.25"
        :data-items="firstSeries"
      />
      <ChartSeriesItem :type="'bar'" :data-items="secondSeries" />
      <ChartSeriesItem :type="'bar'" :data-items="thirdSeries" />
      <ChartSeriesItem :type="'bar'" :data-items="fourthSeries" />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartLegend,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      firstSeries: [100, 123, 234, 343],
      secondSeries: [120, 67, 231, 196],
      thirdSeries: [45, 124, 189, 143],
      fourthSeries: [87, 154, 210, 215],
      categories: ["Q1", "Q2", "Q3", "Q4"],
    };
  },
};
</script>