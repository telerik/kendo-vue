<template>
  <div>
     <dropdownlist
      :style="{ width: '230px' }"
      :data-items="lineStyles"
      :value="lineStyle"
      @change="onStyleChange"
    />
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'area'"
          :data-items="series"
          :markers="{ visible: false }"
          :line="{ style: lineStyle }"
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


export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    dropdownlist: DropDownList,
  },
  data: function () {
    return {
      series: [
        20,
        1,
        18,
        3,
        15,
        5,
        10,
        6,
        9,
        6,
        10,
        5,
        13,
        3,
        16,
        1,
        19,
        1,
        20,
        2,
        18,
        5,
        12,
        7,
        10,
        8,
      ],
      lineStyle: "normal",
      lineStyles: ["normal", "step", "smooth"],
    };
  },
  methods: {
    onStyleChange(e) {
      this.lineStyle = e.value;
    },
  },
};
</script>