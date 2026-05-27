<template>
  <Chart :pannable="true" :zoomable="true" :render-as="'canvas'">
    <ChartLegend :position="'bottom'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'heatmap'"
        :data-items="dataItems"
        :x-field="'a'"
        :y-field="'b'"
        :field="'value'"
        :labels="{ visible: false }"
      />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem
        :min="10"
        :max="15"
        :labels="{ rotation: 'auto' }"
      />
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :min="10" :max="15" />
    </ChartYAxis>
  </Chart>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
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

const dataItems = ref(makeDataObjects(25, 25));
</script>
