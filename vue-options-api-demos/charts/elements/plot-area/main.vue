<template>
  <div>
    <Chart>
      <ChartPlotArea :background="'#888'" />
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartPlotArea,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartPlotArea,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [1, 2, 3, 5],
    };
  },
};
</script>
