<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :visible="false" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Fibonacci'"
          :data-items="seriesData"
          :type="'column'"
          :color="'rgb(148, 236, 255)'"
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
    type: 'crosshatch',
    background: 'rgb(172, 88, 255)',
    width: 1.2,
    gap: 10,
};
</script>
