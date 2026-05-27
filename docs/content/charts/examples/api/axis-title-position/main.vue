<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :title="{ text: 'Title', position: 'top' }" />
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
</script>
