<template>
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories" />
    </ChartCategoryAxis>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem :name="'Positive'" :type="'verticalArea'" :data-items="positiveSeries" />
      <ChartSeriesItem :name="'Negative'" :type="'verticalArea'" :data-items="negativeSeries" />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const categories = ref(["Jan", "Feb", "Mar", "Apr"]);
const positiveSeries = ref([1, 2, 3, 5]);
const negativeSeries = ref([-1, -2, -3, -5]);
</script>
