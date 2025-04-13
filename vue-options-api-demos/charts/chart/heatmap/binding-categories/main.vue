<template>
    <Chart
      :style="{
        width: '100%',
        height: '220px',
      }"
    >
      <ChartSeries>
        <ChartSeriesItem :type="'heatmap'" :data-items="dataItems" />
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem :categories="categories.x" />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem :categories="categories.y" />
      </ChartYAxis>
    </Chart>
  </template>
<script>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
} from '@progress/kendo-vue-charts';

export default {
    components: {
        Chart,
        ChartSeries,
        ChartSeriesItem,
        ChartXAxis,
        ChartXAxisItem,
        ChartYAxis,
        ChartYAxisItem,
    },
    data() {
        return {
            dataItems: [['A2', 'B3', 5]],
            categories: {
                x: ['A1', 'A2', 'A3', 'A4'],
                y: ['B1', 'B2', 'B3', 'B4'],
            },
        };
    },
};
</script>
