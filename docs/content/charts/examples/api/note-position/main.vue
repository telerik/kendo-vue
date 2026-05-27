<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :notes="{ data, position }" />
      </ChartValueAxis>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
} from "@progress/kendo-vue-charts";
import { ref } from 'vue';

const data = ref([{ value: 1 }]);
const position = ref("right");
</script>
