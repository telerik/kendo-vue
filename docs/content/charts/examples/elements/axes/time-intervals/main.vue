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
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Daily Max (&deg;C)'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'column'"
          :name="'Daily Max Temperature'"
          :field="'TMax'"
          :category-field="'Date'"
          :data-items="data"
          :color="'rgb(255, 208, 223)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :base-unit="baseUnit" />
      </ChartCategoryAxis>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartTooltip,
} from "@progress/kendo-vue-charts";
import { mockData } from "./weather-data.js";

const data = mockData();
const baseUnit = ref("weeks");
const baseUnits = ["days", "weeks", "months"];

const pattern = {
  type: "grid",
  background: "rgb(255, 148, 109)",
  size: 12,
  gap: 1.2,
};

const onChange = (event) => {
  baseUnit.value = event.value;
};
</script>
