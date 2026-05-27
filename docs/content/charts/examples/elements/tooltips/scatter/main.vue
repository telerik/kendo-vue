<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartXAxis>
        <ChartXAxisItem
          :crosshair="{ visible: true, tooltip: { visible: true } }"
        />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem
          :crosshair="{ visible: true, tooltip: { visible: true } }"
        />
      </ChartYAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'scatter'" :name="'Series'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartYAxis,
    ChartYAxisItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([
    [1, 1],
    [2, 2],
    [3, 3],
]);
</script>
