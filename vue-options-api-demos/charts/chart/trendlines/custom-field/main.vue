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
      <ChartLegend :visible="false" />
    </Chart>
  </div>
</template>

<script>
  import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
  } from '@progress/kendo-vue-charts';

  import { stockDataSample } from './stock-data-sample.js';

  export default {
    components: {
      Chart,
      ChartTitle,
      ChartSeries,
      ChartSeriesItem,
      ChartLegend,
      ChartValueAxis,
      ChartValueAxisItem,
      ChartCategoryAxis,
      ChartCategoryAxisItem
    },
    data() {
      return {
        seriesData: stockDataSample
      };
    }
  };
</script>
