<template>
  <Chart>
    <ChartLegend :position="'bottom'" />
    <ChartTooltip :render="'defaultTooltipRender'">
      <template #defaultTooltipRender="{ props }">
        {{ props.point.value.value }} contributions on week
        {{ props.point.value.x }}, day
        {{ props.point.value.y }}
      </template>
    </ChartTooltip>
    <ChartSeries>
      <ChartSeriesItem :type="'heatmap'" :data-items="dataItems" />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem :visible="false" />
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :visible="false" />
    </ChartYAxis>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import data from './heatmap-data';

const dataItems = data;
</script>
