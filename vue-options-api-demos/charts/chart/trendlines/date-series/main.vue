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
          :categoryField="'date'"
          :data-items="seriesData"
        />
        <ChartSeriesItem
          :name="'Sales Trendline (LINEAR)'"
          :type="'linearTrendline'"
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
        <ChartCategoryAxisItem baseUnit='fit' />
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
        seriesData: salesByQuarter
      };
    }
  };
</script>
