<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartTooltip :format="'Default Content {0}'" />
      <ChartSeries>
        <ChartSeriesItem :name="'Series 0'" :data-items="seriesData" />
        <ChartSeriesItem :name="'Series 1'" :data-items="seriesData">
          <ChartSeriesItemTooltip :format="'Series 1 value: {0}'" />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([1, 2, 3]);
</script>
