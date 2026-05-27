<template>
  <div>
    <Chart>
      <ChartTitle :text="'Trendlines'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :name="'Sales By Quarter'"
          :style="'smooth'"
          :field="'count'"
          :data-items="seriesData"
        />
        <ChartSeriesItem
          :type="'linearTrendline'"
          :name="'Sales Trendline (LINEAR)'"
          :for="'Sales By Quarter'"
        />
        <ChartSeriesItem
          :name="'Sales Trendline (M.AVG)'"
          :type="'movingAverageTrendline'"
          :dashType="'dot'"
          :for="'Sales By Quarter'"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :labels="labels" />
      </ChartCategoryAxis>
      <ChartTooltip :shared="true" />
      <ChartLegend :position="'bottom'" />
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-vue-charts';

import { salesByQuarter } from './sales-data.js';
import { ref } from 'vue';

const seriesData = ref([...salesByQuarter]);
const labels = ref({ step: 5 });
</script>
