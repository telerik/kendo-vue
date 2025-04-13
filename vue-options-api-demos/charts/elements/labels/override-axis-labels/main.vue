<template>
  <div>
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem :labels="{ content: labelContent }" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      seriesData: [20, 40, 45, 30, 50],
      suffix: ' ms',
    };
  },
  methods: {
    labelContent(e) {
      return e.value + this.suffix;
    },
  },
};
</script>
