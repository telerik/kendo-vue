<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem :name="'Series 1'" :type="'area'" :stack="{ type: '100%' }" :data-items="firstSeries" />
      <ChartSeriesItem :name="'Series 2'" :type="'area'" :data-items="secondSeries" />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";

const firstSeries = ref([1, 2, 3, 5]);
const secondSeries = ref([5, 3, 2, 1]);
</script>
