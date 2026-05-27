<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" />
      <ChartLegend :position="'bottom'" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :name="'Series'"
          :data-items="seriesData"
          :field="'value'"
          :note-text-field="'extremum'"
          :notes="notes"
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
    ChartTooltip,
} from '@progress/kendo-vue-charts';

const seriesData = ref([
    { value: 2 },
    { value: 4, extremum: 'Max' },
    { value: 3 },
    { value: 1, extremum: 'Min' },
]);

const notes = ref({
    label: {
        position: 'outside',
    },
    line: {
        length: 20,
    },
    icon: {
        type: 'square',
    },
    position: 'bottom',
});
</script>
