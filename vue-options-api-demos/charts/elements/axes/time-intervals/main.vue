<template>
  <div>
    <div class="example-config">
      <label>Base Unit: </label>
      <DropDownList
        :style="{
          marginLeft: 5,
        }"
        :value="baseUnit"
        @change="onChange"
        :data-items="baseUnits"
      />
    </div>
    <Chart>
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :field="'TMax'"
          :category-field="'Date'"
          :data-items="data"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :base-unit="baseUnit" />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";

import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-vue-charts";
import { mockData } from "./weather-data.js";

const data = mockData();

export default {
  components: {
    DropDownList,
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      data: data,
      baseUnit: "weeks",
      baseUnits: ["days", "weeks", "months"],
    };
  },
  methods: {
    onChange(event) {
      this.baseUnit = event.value;
    },
  },
};
</script>
