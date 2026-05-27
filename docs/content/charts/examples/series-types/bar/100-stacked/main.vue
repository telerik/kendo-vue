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
        :stack="{ type: '100%' }"
        :data-items="firstSeries"
      />
      <ChartSeriesItem
        :name="'John'"
        :type="'bar'"
        :data-items="secondSeries"
      />
      <ChartSeriesItem
        :name="'George'"
        :type="'bar'"
        :data-items="thirdSeries"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
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
import { ref } from 'vue';

const firstSeries = ref([1, 2, 3]);
const secondSeries = ref([1, 3, 1]);
const thirdSeries = ref([1, 5, 3]);
const categories = ref([
    new Date(),
    new Date().setDate(new Date().getDate() + 1),
    new Date().setDate(new Date().getDate() + 2),
]);
</script>
