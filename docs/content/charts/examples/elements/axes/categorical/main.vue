<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartValueAxis>
        <ChartValueAxisItem :title="title" :min="0" :max="100" />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :name="'Miles'" :data-items="seriesData" :type="'line'" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const title = { text: 'Miles' };
const seriesData = [20, 40, 45, 30, 50];
const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
</script>
