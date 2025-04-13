<template>
  <div>
    <Chart>
      <ChartSeriesDefaults :type="'bar'" :labels="{ format: 'c' }" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="salesData" />
        <ChartSeriesItem :data-items="purchaseData" />
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
  ChartSeriesDefaults,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeriesDefaults,
  },
  data() {
    return {
      salesData: [20, 40, 45, 30, 50],
      purchaseData: [12, 30, 30, 45, 10],
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    };
  },
};
</script>
