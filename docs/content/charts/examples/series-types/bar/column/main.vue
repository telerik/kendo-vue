<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :name="'Series 1'"
        :type="'column'"
        :data-items="firstSeries"
        :color="'rgb(255, 196, 165)'"
        :overlay="{ gradient: 'none' }"
        :border="{ width: 0 }"
        :pattern="patterns.diagonal"
      />
      <ChartSeriesItem
        :name="'Series 2'"
        :type="'column'"
        :data-items="secondSeries"
        :color="'rgb(255, 220, 200)'"
        :overlay="{ gradient: 'none' }"
        :border="{ width: 0 }"
        :pattern="patterns.crosshatch"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const firstSeries = ref([1, 2, 3, 5]);
const secondSeries = ref([-1, -2, -3, -5]);

const patterns = {
    diagonal: {
        type: 'diagonalStripes',
        background: 'rgb(230, 120, 80)',
        width: 1.4,
        gap: 10,
    },
    crosshatch: {
        type: 'crosshatch',
        background: 'rgb(255, 140, 105)',
        width: 1.2,
        gap: 10,
    },
};
</script>
