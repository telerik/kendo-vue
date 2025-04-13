<template>
  <div>
    <div class="example-config">
      <label>Aggregate: </label>
      <DropDownList
        :style="{
          marginLeft: 5,
        }"
        :value="aggregate"
        @change="onChange"
        :data-items="aggregates"
      />
    </div>
    <Chart>
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :field="'TMax'"
          :category-field="'Date'"
          :aggregate="aggregate"
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
      aggregate: "max",
      aggregates: ["max", "min"],
    };
  },
  methods: {
    onChange(event) {
      this.aggregate = event.value;
    },
  },
};
</script>
