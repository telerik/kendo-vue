<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Fibonacci'"
          :data-items="seriesData"
          :type="'column'"
          :color="'rgb(255, 208, 223)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTooltip,
} from "@progress/kendo-vue-charts";

const seriesData = ref([1, 2, 3, 5]);

const pattern = {
  type: "dots",
  background: "rgba(255, 146, 184, 0.6)",
  radius: 6,
  gap: 4,
};
</script>
