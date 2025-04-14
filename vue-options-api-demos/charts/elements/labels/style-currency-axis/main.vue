<template>
  <div>
    <Chart>
      <ChartAxisDefaults :labels="{ format: 'c0' }" />
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartAxisDefaults,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartAxisDefaults,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [2034, 40124, 45234, 30234, 50234],
    };
  },
};
</script>
