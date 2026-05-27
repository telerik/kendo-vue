<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartTooltip :shared="true" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :name="'Series 0'" :data-items="seriesData" />
        <ChartSeriesItem :name="'Series 1'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([1, 2, 3]);
const categories = ref(['A', 'B', 'C']);
</script>
