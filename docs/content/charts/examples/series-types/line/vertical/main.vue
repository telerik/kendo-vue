<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :name="'Positive'" :type="'verticalLine'" :data-items="[1, 2, 3, 5]" />
        <ChartSeriesItem :name="'Negative'" :type="'verticalLine'" :data-items="[-1, -2, -3, -5]" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";

const categories = ref(["Jan", "Feb", "Mar", "Apr"]);
</script>
