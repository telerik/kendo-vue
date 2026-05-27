<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
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
        <ChartSeriesItem :type="'line'" :name="'Series'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const categories = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
const seriesData = ref([20, 40, 45, 30, 50]);
const valueAxisLabels = ref({
    padding: 3,
    font: 'bold 16px Arial, sans-serif',
});
</script>
