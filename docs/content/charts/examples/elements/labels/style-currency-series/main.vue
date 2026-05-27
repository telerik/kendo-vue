<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :name="'Series'" :data-items="seriesData">
          <ChartSeriesLabels :format="'c0'" />
        </ChartSeriesItem>
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
    ChartSeriesLabels,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const seriesData = ref([2034, 40124, 45234, 30234, 50234]);
</script>
