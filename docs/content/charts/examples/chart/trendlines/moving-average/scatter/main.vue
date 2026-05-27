<template>
  <div>
    <Chart>
      <ChartTitle :text="'Trendlines'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Series A'"
          :type="'scatter'"
          :visibleInLegend="false"
          :data-items="seriesData"
        />
        <ChartSeriesItem
          :name="'Sales Trendline (M.AVG)'"
          :type="'movingAverageTrendline'"
          :dashType="'solid'"
          :for="'Series A'"
          :trendline="trendline"
        />
      </ChartSeries>
      <ChartTooltip :visible="true" />
      <ChartLegend :visible="false" />
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([
    [5, 5], [6, 10], [7, 6],
    [8, 9], [9, 6], [10, 10], [11, 5],
    [12, 13], [13, 3], [14, 16], [15, 1],
    [16, 19], [17, 1], [18, 20], [19, 2],
    [20, 18], [21, 5], [22, 12], [23, 7],
    [24, 10], [25, 8]
]);

const trendline = ref({ period: 4 });
</script>
