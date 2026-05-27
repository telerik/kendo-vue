<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartTitle :text="'Units sold'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        :categories="categories"
        :title="{ text: 'Months' }"
      />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem :name="'Product A'" :type="'area'" :data-items="firstSeries" />
      <ChartSeriesItem :name="'Product B'" :type="'area'" :data-items="secondSeries" />
      <ChartSeriesItem :name="'Product C'" :type="'area'" :data-items="thirdSeries" />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";

const categories = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]);
const firstSeries = ref([123, 276, 310, 212, 240, 156, 98]);
const secondSeries = ref([165, 210, 287, 144, 190, 167, 212]);
const thirdSeries = ref([56, 140, 195, 46, 123, 78, 95]);
</script>
