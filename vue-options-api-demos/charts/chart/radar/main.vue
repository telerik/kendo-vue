<template>
  <div>
    <Chart>
      <ChartTitle text="Market Value of Major Banks /bln/" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'radarLine'"
          :data-items="radarData"
          :field="'pre'"
          :category-field="'name'"
          :name="'Market value as of 2007'"
        />
        <ChartSeriesItem
          :type="'radarLine'"
          :data-items="radarData"
          :field="'post'"
          :category-field="'name'"
          :name="'Market value as of 2009'"
        />
      </ChartSeries>
      <ChartValueAxis>
        <ChartValueAxisItem
          :labels="{
            format: 'C0',
          }"
        />
      </ChartValueAxis>
      <ChartLegend :position="'bottom'" />
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";
import data from "./radar-data.json";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      radarData: data,
    };
  },
};
</script>
