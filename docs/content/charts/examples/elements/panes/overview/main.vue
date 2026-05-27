<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartPanes>
        <ChartPane :name="'top'" />
        <ChartPane :name="'bottom'" :height="100" />
      </ChartPanes>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'top'" />
        <ChartValueAxisItem :name="'bottom'" :pane="'bottom'" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :name="'Top Pane'"
          :data-items="seriesData[0]"
          :type="'column'"
          :color="'rgb(255, 190, 150)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
        <ChartSeriesItem
          :type="'line'"
          :name="'Bottom Pane'"
          :data-items="seriesData[1]"
          :axis="'bottom'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([
    [1, 2, 3, 5],
    [0, 1, 0, 1],
]);

const pattern = {
    type: 'diagonalStripes',
    background: 'rgb(230, 120, 80)',
    width: 1.4,
    gap: 10,
};
</script>
