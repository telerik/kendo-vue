<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :name="'Value'"
          :data-items="data"
          :field="'value'"
          :error-low-field="'low'"
          :error-high-field="'high'"
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

const data = ref([
    {
        value: 4.743,
        low: 4.5,
        high: 5,
    },
    {
        value: 7.295,
        low: 7,
        high: 8,
    },
    {
        value: 6.376,
        low: 5,
        high: 6.5,
    },
]);
</script>
