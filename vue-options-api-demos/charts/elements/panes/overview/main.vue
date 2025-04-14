<template>
  <div>
    <Chart>
      <ChartPanes>
        <ChartPane :name="'top'" />
        <ChartPane :name="'bottom'" :height="100" />
      </ChartPanes>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'top'" />
        <ChartValueAxisItem :name="'bottom'" :pane="'bottom'" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData[0]" />
        <ChartSeriesItem
          :type="'line'"
          :data-items="seriesData[1]"
          :axis="'bottom'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartPanes,
  ChartPane,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [
        [1, 2, 3, 5],
        [0, 1, 0, 1],
      ],
    };
  },
};
</script>
