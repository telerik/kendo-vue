<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartValueAxis>
        <ChartValueAxisItem :labels="{ content: labelContent }" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :name="'Series'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const seriesData = ref([20, 40, 45, 30, 50]);
const suffix = ref(' ms');

function labelContent(e) {
    return e.value + suffix.value;
}
</script>
