<template>
  <div>
    <Chart>
      <ChartTitle :text="'Trendlines'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Stock Data'"
          :type="'ohlc'"
          :openField="'Open'"
          :highField="'High'"
          :lowField="'Low'"
          :closeField="'Close'"
          :categoryField="'Date'"
          :data-items="seriesData"
        />
        <ChartSeriesItem
          :name="'Sales Trendline (LINEAR)'"
          :type="'linearTrendline'"
          :field="'low'"
          :for="'Stock Data'"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :type="'date'" :baseUnit="'fit'" :maxDivisions="50" />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :min="50" />
      </ChartValueAxis>
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
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';
import { stockDataSample } from './stock-data-sample.js';

const seriesData = ref(stockDataSample);
</script>
