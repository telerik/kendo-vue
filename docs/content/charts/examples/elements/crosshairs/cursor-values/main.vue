<template>
  <div>
    <Chart @plotareahover="onPlotAreaHover">
      <ChartLegend :position="'bottom'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories"
          :crosshair="crosshair"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :crosshair="crosshair" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :name="'Series'"
          :data-items="data"
          :type="'column'"
          :color="'rgb(235, 210, 245)'"
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
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
} from '@progress/kendo-vue-charts';

const data = ref([1, 2, 3]);
const categories = ref(['A', 'B', 'C']);
const crosshair = ref({
    visible: true,
    tooltip: {
        visible: true,
        format: '#.##',
    },
});

const pattern = {
    type: 'diagonalStripes',
    background: 'rgb(150, 90, 200)',
    width: 1.4,
    gap: 14,
};

function onPlotAreaHover(args) {
    console.log(`Category: ${args.category}`);
    console.log(`Value: ${args.value}`);
}
</script>
