<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'scatterLine'"
          :name="'Data Points'"
          :data-items="data"
          :x-error-low-field="'xLow'"
          :x-error-high-field="'xHigh'"
          :y-error-low-field="'yLow'"
          :y-error-high-field="'yHigh'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const data = ref([
    { x: 6.4, y: 13.4, xLow: 5, xHigh: 7, yLow: 12, yHigh: 14 },
    { x: 1.7, y: 11, xLow: 1, xHigh: 3, yLow: 11, yHigh: 14 },
    { x: 5.4, y: 8, xLow: 3, xHigh: 6, yLow: 5, yHigh: 8 },
]);
</script>
