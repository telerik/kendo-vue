<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Cash flow'" />
      <ChartValueAxis>
        <ChartValueAxisItem>
          <ChartValueAxisLabels :format="'c0'" />
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'waterfall'"
          :name="'HL Mountain Rear Weel'"
          :data-items="waterfallData"
          :color="pointColor"
          :field="'amount'"
          :categoryField="'period'"
          :summaryField="'summary'"
        >
          <ChartSeriesLabels :position="'insideEnd'" :format="'c0'" />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    ChartSeriesLabels,
    ChartLegend,
    ChartValueAxisLabels,
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

import data from "./waterfall-data.json";
import { ref } from 'vue';

const waterfallData = ref(data);

function pointColor(point) {
    let summary = point.dataItem.summary;

    if (summary) {
        return summary === "total" ? "#555" : "gray";
    }

    if (point.value > 0) {
        return "green";
    } else {
        return "red";
    }
}
</script>

