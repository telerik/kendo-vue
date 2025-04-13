<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData">
          <ChartSeriesLabels :format="'c0'" />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  },
  data: function () {
    return {
      seriesData: [2034, 40124, 45234, 30234, 50234],
    };
  },
};
</script>
