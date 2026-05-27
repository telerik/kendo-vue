<template>
  <Chart>
    <ChartTooltip :render="'renderTooltip'">
      <template #renderTooltip="{ props }">
        <div v-if="props">
          {{ props.point.category }} ({{ props.point.series.name }}):
          {{ props.point.value }}%
        </div>
      </template>
    </ChartTooltip>
    <ChartTitle :text="'Share of Internet Population Growth'" />
    <ChartLegend :position="'bottom'" />
    <ChartArea :background="'none'" />
    <ChartSeries>
      <ChartSeriesItem
        v-for="(series, index) in internetGrowthDataRef"
        :type="'donut'"
        :key="index"
        :startAngle="150"
        :name="series.name"
        :data-items="series.data"
        :field="'value'"
        :category-field="'category'"
        :color-field="'color'"
      >
        <ChartSeriesLabels
          :position="'outsideEnd'"
          :background="'none'"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartArea,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-vue-charts";

import internetGrowthData from "./donut-series-data.json";
const labelContent = (e) => `${e.category}: \n ${e.value}%`;
import { ref } from 'vue';

const internetGrowthDataRef = ref(internetGrowthData);
</script>
