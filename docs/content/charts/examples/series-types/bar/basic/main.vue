<template>
  <Chart>
    <ChartTitle :text="'Units sold'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'Months'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :name="'Q1'"
        :type="'bar'"
        :gap="2"
        :spacing="0.25"
        :data-items="firstSeries"
      />
      <ChartSeriesItem :name="'Q2'" :type="'bar'" :data-items="secondSeries" />
      <ChartSeriesItem :name="'Q3'" :type="'bar'" :data-items="thirdSeries" />
      <ChartSeriesItem :name="'Q4'" :type="'bar'" :data-items="fourthSeries" />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const firstSeries = ref([100, 123, 234, 343]);
const secondSeries = ref([120, 67, 231, 196]);
const thirdSeries = ref([45, 124, 189, 143]);
const fourthSeries = ref([87, 154, 210, 215]);
const categories = ref(["Q1", "Q2", "Q3", "Q4"]);
</script>
