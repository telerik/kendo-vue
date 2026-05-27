<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :name="'Sales'"
        :data-items="seriesData"
        :type="'column'"
        :field="'sales'"
        :category-field="'product'"
        :color="'rgb(255, 196, 165)'"
        :overlay="{ gradient: 'none' }"
        :border="{ width: 0 }"
        :pattern="pattern"
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
} from '@progress/kendo-vue-charts';

const seriesData = [
    {
        product: 'Chai',
        sales: 200,
    },
    {
        product: 'Others',
        sales: 250,
    },
];

const pattern = {
    type: 'dots',
    background: 'rgb(230, 120, 80)',
    radius: 6,
    gap: 4,
};
</script>
