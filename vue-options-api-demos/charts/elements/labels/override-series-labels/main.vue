<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData">
          <ChartSeriesLabels :content="labelContent" />
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
