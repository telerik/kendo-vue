<template>
  <div>
    <Chart>
      <ChartTooltip />
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" />
        <ChartSeriesItem :data-items="seriesData">
          <ChartSeriesItemTooltip :background="'green'" />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesItemTooltip,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
  },
  data() {
    return {
      seriesData: [1, 2, 3],
    };
  },
};
</script>
