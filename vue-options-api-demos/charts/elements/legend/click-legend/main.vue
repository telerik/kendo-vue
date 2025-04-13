<template>
  <div>
    <Chart @legenditemclick="onLegendItemClick">
      <ChartLegend />
      <ChartSeries>
        <ChartSeriesItem
          :name="'Fibonacci'"
          :visible="seriesVisible"
          :data-items="seriesData"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [1, 2, 3, 5],
      seriesVisible: true,
    };
  },
  methods: {
    onLegendItemClick() {
      this.seriesVisible = !this.seriesVisible;
    },
  },
};
</script>
