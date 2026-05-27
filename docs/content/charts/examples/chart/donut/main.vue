<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :type="'donut'"
        :data-items="dataItems"
        :category-field="'kind'"
        :field="'share'"
      >
        <ChartSeriesLabels
          :color="'#fff'"
          :background="'none'"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
} from "@progress/kendo-vue-charts";
import data from "./power-distribution-data.json";

const dataItems = data;
const labelContent = (e) => e.category;
</script>
