<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Series'"
          :data-items="data"
          :error-bars="errorBars"
          :type="'column'"
          :color="'rgb(255, 210, 170)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
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
const errorBars = ref({ value: "percentage(20)" });

const pattern = {
  type: "dots",
  background: "rgb(230, 120, 80)",
  radius: 6,
  gap: 4,
};
</script>
