<template>
  <div>
    <Chart>
      <ChartTitle :text="'Charge current vs. charge time'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'scatter'"
          :data-items="scatterData"
          :x-field="'rainfall'"
          :y-field="'windSpeed'"
        />
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem :title="{ text: 'Wind Speed [km/h]' }" />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem
          :title="{
            text: 'Rainfall [mm]',
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
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

import data from "./scatter-plot-data.json";

export default {
  components: {
    Chart,
    ChartTitle,
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
