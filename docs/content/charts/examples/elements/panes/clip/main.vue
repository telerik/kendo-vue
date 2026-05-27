<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartPanes>
        <ChartPane name="top" :clip="false" title="Clipping Disabled" />
        <ChartPane name="bottom" title="Clipping enabled (default)" />
      </ChartPanes>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :justified="true" />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem name="top" />
        <ChartValueAxisItem name="bottom" pane="bottom" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem type="line" :name="'Top Pane'" :data-items="seriesData" />
        <ChartSeriesItem
          type="line"
          :name="'Bottom Pane'"
          :data-items="seriesData"
          axis="bottom"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartPane,
    ChartPanes,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([1, 2, 3, 5]);
</script>
