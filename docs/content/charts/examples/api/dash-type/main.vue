<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="data" :dash-type="'dot'" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { Chart, ChartSeries, ChartSeriesItem } from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const data = ref([1, 2, 3]);
</script>
