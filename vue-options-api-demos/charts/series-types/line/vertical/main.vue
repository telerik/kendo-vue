<template>
  <div>
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'verticalLine'" :data-items="[1, 2, 3, 5]" />
        <ChartSeriesItem
          :type="'verticalLine'"
          :data-items="[-1, -2, -3, -5]"
        />
      </ChartSeries>
    </Chart>
  </div>
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
    };
  },
};
</script>
