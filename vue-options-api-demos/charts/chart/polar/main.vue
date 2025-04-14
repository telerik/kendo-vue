<template>
  <div>
    <Chart>
      <ChartTitle :text="'Sun position at equinox'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'polarLine'"
          :data-items="polarData"
          :x-field="'azimuth'"
          :y-field="'altitude'"
        >
          <ChartSeriesLabels :position="'below'" :content="labelContent" />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartXAxis>
        <ChartXAxisItem :start-angle="-90" :major-unit="30" />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem :labels="{ visible: false }" />
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
  ChartSeriesLabels,
} from "@progress/kendo-vue-charts";
import data from "./polar-data.json";

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
    ChartSeriesLabels,
  },
  data: function () {
    return {
      polarData: data,
    };
  },
  methods: {
    labelContent(e) {
      return `${e.dataItem.time.substring(0, 2)}h`;
    },
  },
};
</script>
