<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories">
          <ChartCategoryAxisCrosshair>
            <ChartCategoryAxisCrosshairTooltip />
          </ChartCategoryAxisCrosshair>
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem>
          <ChartValueAxisCrosshair>
            <ChartValueAxisCrosshairTooltip />
          </ChartValueAxisCrosshair>
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :name="'Series'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisCrosshair,
    ChartCategoryAxisCrosshairTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartValueAxisCrosshair,
    ChartValueAxisCrosshairTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([1, 2, 3]);
const categories = ref(['A', 'B', 'C']);
</script>
