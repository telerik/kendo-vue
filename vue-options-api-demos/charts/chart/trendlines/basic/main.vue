<template>
  <div>
    <Chart>
      <ChartTitle :text="'Trendlines'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :name="'Sales By Quarter'"
          :style="'smooth'"
          :field="'count'"
          :data-items="seriesData"
        />
        <ChartSeriesItem
          :type="'linearTrendline'"
          :name="'Sales Trendline (LINEAR)'"
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
