<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeriesDefaults :type="'bar'" :labels="{ format: 'c' }" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :name="'Sales'" :data-items="salesData" />
        <ChartSeriesItem :name="'Purchases'" :data-items="purchaseData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeriesDefaults,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const salesData = ref([20, 40, 45, 30, 50]);
const purchaseData = ref([12, 30, 30, 45, 10]);
const categories = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
</script>
