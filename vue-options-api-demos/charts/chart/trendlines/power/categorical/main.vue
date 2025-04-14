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
          :name="'Sales Trendline (POW)'"
          :type="'powerTrendline'"
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

<script>
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

  export default {
    components: {
      Chart,
      ChartTitle,
      ChartSeries,
      ChartSeriesItem,
      ChartTooltip,
      ChartLegend,
      ChartCategoryAxis,
      ChartCategoryAxisItem
    },
    data() {
      return {
        seriesData: [...salesByQuarter],
        labels: { step: 5 }
      };
    }
  };
</script>
