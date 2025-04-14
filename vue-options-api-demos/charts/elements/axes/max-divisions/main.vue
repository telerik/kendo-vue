<template>
  <div>
    <Chart>
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :field="'TMax'"
          :category-field="'Date'"
          :data-items="data"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :max-divisions="10" />
      </ChartCategoryAxis>
      <ChartTooltip :render="'tooltipRender'">
        <template v-slot:tooltipRender="{ props }">
          <span>
            {{ props.point.category.toDateString() }}: {{ props.point.value }}
          </span>
        </template>
      </ChartTooltip>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartTooltip,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-vue-charts';
import { mockData } from './weather-data.js';

const data = mockData();

export default {
  components: {
    Chart,
    ChartTooltip,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      data: data,
    };
  },
};
</script>
