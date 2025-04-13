<template>
  <div>
    <Chart>
      <ChartTitle :text="'Charge current vs. charge time'" />
      <ChartTooltip :format="'{1}% in {0} minutes'" />
      <ChartSeries>
        <ChartSeriesItem
          v-for="(series, idx) in scatterData"
          :key="idx"
          :type="'scatterLine'"
          :data-items="series.stats"
          :name="series.current"
          :x-field="'time'"
          :y-field="'charge'"
        />
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem
          :title="{ text: 'Time' }"
          :max="90"
          :labels="{ format: '{0}m' }"
        />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem
          :title="{ text: 'Charge' }"
          :max="100"
          :labels="{
            format: '{0}m',
          }"
        />
      </ChartYAxis>
    </Chart>
  </div>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

import data from "./scatter-line-data.json";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      scatterData: data,
    };
  },
};
</script>
