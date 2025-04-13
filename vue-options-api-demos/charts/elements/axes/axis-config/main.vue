<template>
  <div>
    <Chart>
      <ChartAxisDefaults
        :line="{ color: 'red' }"
        :labels="{ font: '12pt sans-serif' }"
      />
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData" />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartAxisDefaults,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartAxisDefaults,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      seriesData: [20, 40, 45, 30, 50],
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    };
  },
};
</script>
