<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem :type="'scatterLine'" :name="'Series One'" :data-items="seriesData.one" />
        <ChartSeriesItem :type="'scatterLine'" :name="'Series Two'" :data-items="seriesData.two" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, ChartTooltip } from '@progress/kendo-vue-charts';

const seriesData = ref({
    one: [
        [10, 10],
        [15, 20],
        [20, 25],
        [32, 40],
        [43, 50],
        [55, 60],
        [60, 70],
        [70, 80],
        [90, 100],
    ],
    two: [
        [10, 40],
        [17, 50],
        [18, 70],
        [35, 90],
        [47, 95],
        [60, 100],
    ],
});
</script>
