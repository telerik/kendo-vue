<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories">
          <ChartCategoryAxisCrosshair>
            <ChartCategoryAxisCrosshairTooltip />
          </ChartCategoryAxisCrosshair>
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :crosshair="crosshair" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :name="'Series'"
          :data-items="data"
          :type="'column'"
          :color="'rgb(255, 210, 120)'"
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
    ChartCategoryAxisCrosshair,
    ChartCategoryAxisCrosshairTooltip,
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
    type: 'verticalStripes',
    background: 'rgb(215, 140, 60)',
    width: 1.6,
    gap: 14,
};
</script>
