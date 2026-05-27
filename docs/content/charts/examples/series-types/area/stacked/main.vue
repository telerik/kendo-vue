<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :name="'Series 1'"
        :type="'area'"
        :data-items="firstSeries"
        :color="'green'"
        :opacity="0.5"
      />
      <ChartSeriesItem
        :name="'Series 2'"
        :type="'area'"
        :data-items="secondSeries"
        :color="'blue'"
        :opacity="0.5"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const firstSeries = ref([1, 1, 1]);
const secondSeries = ref([1, 0, -1]);
</script>
