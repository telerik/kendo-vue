<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :title="title" :min="0" :max="100" />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" :type="'line'" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      title: { text: 'Miles' },
      seriesData: [20, 40, 45, 30, 50],
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    };
  },
};
</script>
