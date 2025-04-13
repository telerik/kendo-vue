<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData">
          <ChartSeriesLabels
            :font="font"
            :background="background"
            :visible="true"
          />
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
      font: 'bold 16px Arial, sans-serif',
      background: 'none',
    };
  },
};
</script>
