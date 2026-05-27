<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Series'"
          :data-items="data"
          :error-bars="errorBars"
          :type="'column'"
          :color="'rgb(255, 220, 210)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="pattern"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const data = ref([1, 3, 2]);
const errorBars = ref({ value: 1 });

const pattern = {
    type: 'diagonalStripes',
    background: 'rgb(255, 146, 184)',
    width: 1.4,
    gap: 12,
};
</script>
