<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'New clients per day'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :name="'Jane'"
        :type="'bar'"
        :stack="{ group: 'a' }"
        :data-items="firstSeries"
      />
      <ChartSeriesItem
        :name="'John'"
        :type="'bar'"
        :stack="{ group: 'a' }"
        :data-items="secondSeries"
      />
      <ChartSeriesItem
        :name="'George'"
        :type="'bar'"
        :stack="{ group: 'b' }"
        :data-items="thirdSeries"
      />
    </ChartSeries>
  </Chart>
</template>
<script setup>
import { ref } from "vue";
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    ChartLegend,
    ChartTooltip,
} from "@progress/kendo-vue-charts";

const firstSeries = ref([1, 2, 3]);
const secondSeries = ref([1, 3, 1]);
const thirdSeries = ref([1, 5, 3]);
const categories = ref([
    new Date(),
    new Date().setDate(new Date().getDate() + 1),
    new Date().setDate(new Date().getDate() + 2),
]);
</script>
