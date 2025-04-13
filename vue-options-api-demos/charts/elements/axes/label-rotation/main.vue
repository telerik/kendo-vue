<template>
  <div>
    <Chart>
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
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
  data() {
    return {
      data: data,
      labelFormat: {
        format: 'd',
        rotation: 'auto',
      },
    };
  },
};
</script>
