<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartAxisDefaults
        :line="{ color: 'red' }"
        :labels="{ font: '12pt sans-serif' }"
      />
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :name="'Series'" :data-items="seriesData" />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartAxisDefaults,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([20, 40, 45, 30, 50]);
const categories = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
</script>
