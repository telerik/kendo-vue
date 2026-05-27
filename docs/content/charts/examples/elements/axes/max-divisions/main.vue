<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :name="'Daily Max Temperature'"
          :field="'TMax'"
          :category-field="'Date'"
          :data-items="data"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :max-divisions="10" />
      </ChartCategoryAxis>
      <ChartTooltip :render="'tooltipRender'">
        <template #tooltipRender="{ props }">
          <span>
            {{ props.point.category.toDateString() }}: {{ props.point.value }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTooltip,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { mockData } from './weather-data.js';

const data = mockData();
</script>
