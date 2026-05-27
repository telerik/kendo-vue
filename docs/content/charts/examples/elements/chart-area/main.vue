<template>
  <div>
    <Chart>
      <ChartArea :background="'#eee'" :margin="30" />
      <ChartSeries>
        <ChartSeriesItem
          :data-items="data"
          :name="'Fibonacci'"
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
import { ref } from "vue";
import {
  Chart,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

const data = ref([1, 2, 3, 5]);

const pattern = {
  type: "verticalStripes",
  background: "rgb(75, 96, 250)",
  width: 1.2,
  gap: 12,
};
</script>
