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
        <ChartCategoryAxisItem />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
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
