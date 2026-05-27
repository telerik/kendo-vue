<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Standard Error'"
          :data-items="data"
          :error-bars="{ value: 'stderr' }"
          :type="'column'"
          :color="'rgb(255, 220, 210)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="patterns.diagonal"
        />
        <ChartSeriesItem
          :name="'Standard Deviation'"
          :data-items="data"
          :error-bars="{ value: 'stddev(0.5)' }"
          :type="'column'"
          :color="'rgb(255, 180, 180)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="patterns.gridRed"
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
import { ref } from "vue";

const data = ref([1, 3, 2]);

const patterns = {
  diagonal: {
    type: "diagonalStripes",
    background: "rgb(255, 146, 184)",
    width: 1.4,
    gap: 12,
  },
  gridRed: {
    type: "grid",
    background: "rgb(220, 60, 60)",
    size: 12,
    gap: 1.2,
  },
};
</script>
