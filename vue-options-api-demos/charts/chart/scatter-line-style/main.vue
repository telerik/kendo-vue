<template>
  <div>
     <dropdownlist
      :style="{ width: '230px' }"
      :data-items="lineStyles"
      :value="lineStyle"
      @change="setLineStyle"
    >
    </dropdownlist>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'scatterLine'"
          :data-items="scatterData"
          :line-style="lineStyle"
          :markers="{ visible: false }"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import data from "./scatter-line-style-data.json";

export default {
  components: {
    dropdownlist: DropDownList,
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      scatterData: data,
      lineStyles: ["normal", "smooth"],
      lineStyle: "normal",
    };
  },
  methods: {
    setLineStyle(e) {
      this.lineStyle = e.value;
    },
  },
};
</script>
