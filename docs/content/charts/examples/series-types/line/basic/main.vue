<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartTitle :text="'Units sold'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :title="{ text: 'Months' }"
          :categories="categories"
        />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          :name="'Product A'"
          :type="'line'"
          :data-items="[123, 276, 310, 212, 240, 156, 98]"
        />
        <ChartSeriesItem
          :name="'Product B'"
          :type="'line'"
          :data-items="[165, 210, 287, 144, 190, 167, 212]"
        />
        <ChartSeriesItem
          :name="'Product C'"
          :type="'line'"
          :data-items="[56, 140, 195, 46, 123, 78, 95]"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
</script>
