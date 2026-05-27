<template>
  <Chart
    :pannable="{ lock: 'y' }"
    :zoomable="{ mousewheel: { lock: 'y' }, selection: { lock: 'y' } }"
  >
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        :max="categoryAxisMax"
        :max-divisions="categoryAxisMaxDivisions"
      />
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem :labels="{ visible: true, format: '#.00' }" />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem
        :name="'Random Data'"
        :data-items="series"
        :field="'value'"
        :category-field="'category'"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartTooltip,
} from "@progress/kendo-vue-charts";

const series = [];
for (let idx = 0; idx < 10000; idx++) {
    series.push({
        value: Math.floor(Math.random() * 100) + 1,
        category: new Date(2000, 0, idx),
    });
}

const categoryAxisMax = new Date(2000, 1, 0);
const categoryAxisMaxDivisions = 10;
</script>
