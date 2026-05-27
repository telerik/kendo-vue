<template>
  <Chart
    :style="{
      width: '300px',
      height: '200px',
    }"
  >
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartTitle :text="'Units sold'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'Months'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :type="'bar'"
        :name="'Series 1'"
        :gap="2"
        :spacing="0.25"
        :data-items="firstSeries"
      />
      <ChartSeriesItem :type="'bar'" :name="'Series 2'" :data-items="secondSeries" />
      <ChartSeriesItem :type="'bar'" :name="'Series 3'" :data-items="thirdSeries" />
      <ChartSeriesItem :type="'bar'" :name="'Series 4'" :data-items="fourthSeries" />
    </ChartSeries>
  </Chart>
</template>
<script setup>
import {
    Chart,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from "@progress/kendo-vue-charts";
import { ref } from "vue";

const firstSeries = ref([100, 123, 234, 343]);
const secondSeries = ref([120, 67, 231, 196]);
const thirdSeries = ref([45, 124, 189, 143]);
const fourthSeries = ref([87, 154, 210, 215]);
const categories = ref(["Q1", "Q2", "Q3", "Q4"]);
</script>
