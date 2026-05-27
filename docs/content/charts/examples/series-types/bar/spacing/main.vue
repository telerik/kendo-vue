<template>
  <Chart>
    <ChartTitle :text="'Sales per day'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories">
        <ChartCategoryAxisTitle :text="'Week Days'" />
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem :name="'Series 1'" :type="'bar'" :spacing="2" :data-items="firstSeries" />
      <ChartSeriesItem :name="'Series 2'" :type="'bar'" :data-items="secondSeries" />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const firstSeries = ref([1, 2, 3, 5, 4]);
const secondSeries = ref([2, 3, 4, 6, 9]);
const categories = ref(["Mon", "Tue", "Wed", "Thu", "Fri"]);
</script>
