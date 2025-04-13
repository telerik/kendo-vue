<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :title="{ text: 'Title', position: 'top' }" />
      </ChartValueAxis>
    </Chart>
  </div>
</template>
<script>
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
  },
};
</script>
