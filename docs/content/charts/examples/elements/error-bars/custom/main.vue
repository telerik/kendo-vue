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
          :color="'rgb(148, 236, 255)'"
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
const errorBars = ref({
    value: function (data) {
        const value = data.value;
        const lowPercentage = value * 0.05;
        const highPercentage = value * 0.1;

        return [lowPercentage, highPercentage];
    },
});

const pattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12,
};
</script>
