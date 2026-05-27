<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartTitle :text="'Monthly Mean Temperatures (&deg;F)'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'boxPlot'"
        :lower-field="'lower'"
        :q1-field="'q1'"
        :median-field="'median'"
        :q3-field="'q3'"
        :upper-field="'upper'"
        :outliers-field="'outliers'"
        :mean-field="'mean'"
        :category-field="'year'"
        :data-items="allData"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import data from "./box-plot-data.json";

const allData = data;
</script>
