<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'custom'" :offset-x="40" :offset-y="25" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Fibonacci'"
          :data-items="seriesData"
          :type="'column'"
          :color="'rgb(255, 196, 165)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const seriesData = ref([1, 2, 3, 5]);

const pattern = {
    type: 'grid',
    background: 'rgb(230, 120, 80)',
    size: 12,
    gap: 1.2,
};
</script>
