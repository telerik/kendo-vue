<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartTitle text="Chart Title" />
    <ChartSeries>
      <ChartSeriesItem
        :data-items="seriesData"
        type="column"
        field="sales"
        categoryField="product"
      />
    </ChartSeries>
    <ChartNoDataOverlay />
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNoDataOverlay,
    ChartTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([]);
</script>
