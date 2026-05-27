<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          type="line"
          :name="'Series'"
          :data-items="seriesData"
          field="value"
          note-text-field="extremum"
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

const seriesData = ref([
    {
        value: 2,
    },
    {
        value: 4,
        extremum: 'Max',
    },
    {
        value: 3,
    },
    {
        value: 1,
        extremum: 'Min',
    },
]);
</script>
