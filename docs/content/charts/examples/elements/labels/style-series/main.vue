<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :name="'Series'" :data-items="seriesData">
          <ChartSeriesLabels
            :font="font"
            :background="background"
            :visible="true"
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([20, 40, 45, 30, 50]);
const font = ref('bold 16px Arial, sans-serif');
const background = ref('none');
</script>
