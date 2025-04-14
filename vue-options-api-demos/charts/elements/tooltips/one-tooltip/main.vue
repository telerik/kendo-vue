<template>
  <div>
    <Chart>
      <ChartTooltip :shared="true" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" />
        <ChartSeriesItem :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesItemTooltip,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
  },
  data() {
    return {
      seriesData: [1, 2, 3],
      categories: ['A', 'B', 'C'],
    };
  },
};
</script>
