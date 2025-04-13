<template>
  <Chart>
    <ChartTitle text="Chart Title" />
    <ChartSeries>
      <ChartSeriesItem
        :data-items="seriesData"
        type="column"
        field="sales"
        categoryField="product"
      />
    </ChartSeries>
    <ChartNoDataOverlay />
  </Chart>
</template>

<script>
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartNoDataOverlay,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNoDataOverlay,
  },
  data: function () {
    return {
      seriesData: [],
    };
  },
};
</script>
