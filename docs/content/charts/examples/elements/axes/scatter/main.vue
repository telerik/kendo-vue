<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem :type="'scatter'" :name="'Rainfall vs Windspeed'" :data-items="seriesData" />
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem :title="{ text: 'Rainfall' }" />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem :title="{ text: 'Windspeed' }" />
      </ChartYAxis>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const seriesData = ref([
    [16.4, 5.4],
    [21.7, 2],
    [25.4, 3],
    [19, 2],
    [10.9, 1],
    [13.6, 3.2],
    [10.9, 7.4],
    [10.9, 0],
    [10.9, 8.2],
    [16.4, 0],
]);
</script>
