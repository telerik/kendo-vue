<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :name="'Sales Total'"
        :data-items="seriesData"
        :type="'column'"
        :field="'sales'"
        :aggregate="customAggregate"
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
    type: 'crosshatch',
    background: 'rgb(230, 120, 80)',
    width: 1.2,
    gap: 10,
};

function customAggregate(values) {
    return values.reduce((n, acc) => acc + n, 0);
}
</script>
