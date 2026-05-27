<template>
  <div>
    <Chart @legenditemclick="onLegendItemClick">
      <ChartTooltip :visible="true" />
      <ChartLegend />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Fibonacci'"
          :visible="seriesVisible"
          :data-items="seriesData"
          :type="'column'"
          :color="'rgb(177, 193, 61)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const seriesData = ref([1, 2, 3, 5]);
const seriesVisible = ref(true);

const pattern = {
    type: 'crosshatch',
    background: 'rgb(172, 88, 255)',
    width: 1.2,
    gap: 10,
};

function onLegendItemClick() {
    seriesVisible.value = !seriesVisible.value;
}
</script>
