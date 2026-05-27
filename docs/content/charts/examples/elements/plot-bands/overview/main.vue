<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="['A', 'B', 'C']"
          :plotBands="categoryPlotBands"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :plot-bands="valuePlotBands" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :name="'Series'" :data-items="[1, 2, 3]" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const categoryPlotBands = ref([
    {
        from: 1,
        to: 2,
        color: '#ffd246',
        opacity: 0.8,
    },
]);

const valuePlotBands = ref([
    {
        from: 2,
        to: 3,
        color: '#78d237',
        opacity: 0.8,
    },
]);
</script>
