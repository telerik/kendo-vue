<template>
  <div>
    <Chart>
      <ChartArea :background="'#eee'" :margin="30" />
      <ChartSeries>
        <ChartSeriesItem :data-items="data" :name="'Fibonacci'" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartArea,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartArea,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      data: [1, 2, 3, 5],
    };
  },
};
</script>
