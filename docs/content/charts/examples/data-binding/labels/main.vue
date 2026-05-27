<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories" />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :name="'Weekly Sales'"
        :data-items="seriesData"
        :type="'column'"
        :color="'rgb(255, 196, 165)'"
        :overlay="{ gradient: 'none' }"
        :border="{ width: 0 }"
        :pattern="pattern"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([20, 40, 45, 30, 50]);
const categories = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);

const pattern = {
    type: 'crosshatch',
    background: 'rgb(255, 140, 105)',
    width: 1.2,
    gap: 10,
};
</script>
