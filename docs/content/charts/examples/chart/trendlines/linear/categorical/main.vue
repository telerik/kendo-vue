<template>
  <div>
    <Chart>
      <ChartTitle :text="'Trendlines'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Sales By Quarter'"
          :type="'line'"
          :style="'smooth'"
          :field="'count'"
          :categoryField="'period'"
          :data-items="seriesData"
        />
        <ChartSeriesItem
          :name="'Sales Trendline (LINEAR)'"
          :type="'linearTrendline'"
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
import { ref } from 'vue';
import { salesByQuarter } from './sales-data.js';

const seriesData = ref([...salesByQuarter]);
const labels = ref({ step: 5 });
</script>
