<template>
  <div>
    <Chart>
      <ChartXAxis>
        <ChartXAxisItem :base-unit="baseUnit" />
      </ChartXAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'scatter'" :data-items="data" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartXAxis,
    ChartXAxisItem,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const baseUnit = ref("months");
const data = ref([
    [new Date(2000, 0, 1), 1],
    [new Date(2001, 0, 1), 1],
]);
</script>
