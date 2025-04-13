<template>
  <div>
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories"
          :labels="{ color: '#0a0' }"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :labels="valueAxisLabels" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      seriesData: [20, 40, 45, 30, 50],
      valueAxisLabels: {
        padding: 3,
        font: 'bold 16px Arial, sans-serif',
      },
    };
  },
};
</script>
