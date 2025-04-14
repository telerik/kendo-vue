<template>
  <div>
    <Chart>
      <ChartXAxis>
        <ChartXAxisItem
          :crosshair="{ visible: true, tooltip: { visible: true } }"
        />
      </ChartXAxis>
      <ChartYAxis>
        <ChartYAxisItem
          :crosshair="{ visible: true, tooltip: { visible: true } }"
        />
      </ChartYAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'scatter'" :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartYAxis,
  ChartYAxisItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartYAxis,
    ChartYAxisItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      seriesData: [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
    };
  },
};
</script>
