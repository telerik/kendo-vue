<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :name="'Daily Max Temperature'"
          :field="'TMax'"
          :categoryField="'Date'"
          :data-items="data"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :labels="labelFormat" />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { mockData } from './weather-data.js';

const data = mockData();
const labelFormat = {
    format: 'd',
    rotation: 'auto',
};
</script>
