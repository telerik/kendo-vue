<template>
  <Chart>
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        type="heatmap"
        :data-items="dataItems"
        :x-field="'a'"
        :y-field="'b'"
        :field="'value'"
      />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem :visible="false">
        <ChartXAxisCrosshair :width="0.5" :color="'red'">
          <ChartAxisDefaultsCrosshairTooltip />
        </ChartXAxisCrosshair>
      </ChartXAxisItem>
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :visible="false">
        <ChartYAxisCrosshair :width="0.5" :color="'red'">
          <ChartYAxisCrosshairTooltip />
        </ChartYAxisCrosshair>
      </ChartYAxisItem>
    </ChartYAxis>
  </Chart>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartAxisDefaultsCrosshairTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisCrosshair,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisCrosshair,
    ChartYAxisCrosshairTooltip,
    ChartYAxisItem,
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
