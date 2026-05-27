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
          :color="'rgb(255, 180, 180)'"
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
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartTooltip
} from '@progress/kendo-vue-charts';

const data = ref([1, 3, 2]);
const errorBars = ref({ value: [0.5, 1] });

const pattern = {
    type: 'grid',
    background: 'rgb(220, 60, 60)',
    size: 12,
    gap: 1.2,
};
</script>
