<template>
  <Chart>
    <ChartTitle :text="'Units sold'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        :categories="categories"
        :title="{
          text: 'Months',
        }"
      />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem :type="'area'" :data-items="firstSeries" />
      <ChartSeriesItem :type="'area'" :data-items="secondSeries" />
      <ChartSeriesItem :type="'area'" :data-items="thirdSeries" />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      firstSeries: [123, 276, 310, 212, 240, 156, 98],
      secondSeries: [165, 210, 287, 144, 190, 167, 212],
      thirdSeries: [56, 140, 195, 46, 123, 78, 95],
    };
  },
};
</script>