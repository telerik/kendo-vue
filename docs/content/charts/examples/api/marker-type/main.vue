<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="data"
          :markers="{ type: markerType }"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Chart, ChartSeries, ChartSeriesItem } from "@progress/kendo-vue-charts";

const data = ref([1, 2, 3]);
const markerType = ref("cross");
</script>
