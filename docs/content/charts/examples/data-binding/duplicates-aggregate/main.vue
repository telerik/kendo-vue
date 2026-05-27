<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :name="'Sales Count'"
        :data-items="seriesData"
        :type="'column'"
        :field="'sales'"
        :aggregate="'count'"
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
import { ref } from 'vue';

const seriesData = ref([
    { product: 'Chai', sales: 200 },
    { product: 'Chai', sales: 100 },
    { product: 'Others', sales: 250 },
]);

const pattern = {
    type: 'diagonalStripes',
    background: 'rgb(230, 120, 80)',
    width: 1.4,
    gap: 10,
};
</script>
