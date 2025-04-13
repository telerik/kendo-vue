<template>
  <div>
    <Chart>
      <ChartTitle :text="'Units sold'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :title="{
            text: 'Months',
          }"
          :categories="categories"
        />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="[123, 276, 310, 212, 240, 156, 98]"
        />
        <ChartSeriesItem
          :type="'line'"
          :data-items="[165, 210, 287, 144, 190, 167, 212]"
        />
        <ChartSeriesItem
          :type="'line'"
          :data-items="[56, 140, 195, 46, 123, 78, 95]"
        />
      </ChartSeries>
    </Chart>
  </div>
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
    };
  },
};
</script>
