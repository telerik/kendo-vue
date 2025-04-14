<template>
  <Chart>
    <ChartTitle :text="'Job Growth'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'bubble'"
        :x-field="'x'"
        :y-field="'y'"
        :size-field="'size'"
        :category-field="'category'"
        :data-items="allData"
      />
    </ChartSeries>
    <ChartXAxis>
      <ChartXAxisItem
        :axis-crossing-value="-5000"
        :major-unit="2000"
        :plot-bands="xPlotBands"
        :labels="{ format: '{0:N0}', skip: 1, rotation: 'auto' }"
      />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem :labels="{ format: '{0:N0}' }" />
    </ChartYAxis>
    <ChartLegend :visible="true" />
    <ChartTooltip :format="'{3}: {2:N0} applications'" :opacity="1" />
  </Chart>
</template>
<script>
import {
  Chart,
  ChartTooltip,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
} from "@progress/kendo-vue-charts";
import data from "./bubble-data.json";

const xPlotBands = [
  {
    from: -5000,
    to: 0,
    color: "#00f",
    opacity: 0.05,
  },
];

export default {
  components: {
    Chart,
    ChartTooltip,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
  },
  data: function () {
    return {
      allData: data,
      xPlotBands: xPlotBands,
    };
  },
};
</script>
