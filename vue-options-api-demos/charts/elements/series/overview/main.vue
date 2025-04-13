<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem :type="'scatterLine'" :data-items="seriesData.one" />
        <ChartSeriesItem :type="'scatterLine'" :data-items="seriesData.two" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      seriesData: {
        one: [
          [10, 10],
          [15, 20],
          [20, 25],
          [32, 40],
          [43, 50],
          [55, 60],
          [60, 70],
          [70, 80],
          [90, 100],
        ],
        two: [
          [10, 40],
          [17, 50],
          [18, 70],
          [35, 90],
          [47, 95],
          [60, 100],
        ],
      },
    };
  },
};
</script>
