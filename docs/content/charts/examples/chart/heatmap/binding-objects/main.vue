<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'heatmap'"
        :data-items="dataItems"
        :x-field="'a'"
        :y-field="'b'"
      />
    </ChartSeries>
  </Chart>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';

const makeDataObjects = (rows, cols) => {
    const data = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        Array.from(Array(cols)).forEach((_, colIndex) => {
            data.push({
                a: `А${rowIndex + 1}`,
                b: `B${colIndex + 1}`,
                value: cols + rowIndex * colIndex,
            });
        });
    }
    return data;
};

const dataItems = ref(makeDataObjects(10, 10));
</script>
