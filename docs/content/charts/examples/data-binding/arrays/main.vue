<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem :name="'Bubble Data'" :data-items="seriesData" :type="'bubble'" />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";

const seriesData = [
    [1, 1, 10],
    [2, 2, 20],
    [3, 3, 30],
];
</script>
