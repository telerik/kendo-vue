<template>
  <Chart
    :style="{
      width: '100%',
      height: '220px',
    }"
  >
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
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

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';

const dataItems = ref([['A2', 'B3', 5]]);
const categories = ref({
    x: ['A1', 'A2', 'A3', 'A4'],
    y: ['B1', 'B2', 'B3', 'B4'],
});
</script>
