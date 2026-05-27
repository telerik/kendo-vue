<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartPaneDefaults :margin="10">
        <ChartPaneDefaultsTitle font="700 18px sans-serif" />
      </ChartPaneDefaults>
      <ChartPanes>
        <ChartPane name="top" title="Sales" />
        <ChartPane name="bottom" title="Inventory" />
      </ChartPanes>
      <ChartValueAxis>
        <ChartValueAxisItem name="top" />
        <ChartValueAxisItem name="bottom" pane="bottom" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" :name="'Sales'" :data-items="seriesData[0]" />
        <ChartSeriesItem
          type="line"
          :name="'Inventory'"
          :data-items="seriesData[1]"
          axis="bottom"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartPane,
    ChartPaneDefaults,
    ChartPaneDefaultsTitle,
    ChartPanes,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([
    [1, 2, 3, 5],
    [5, 4, 3, 1],
]);
</script>
