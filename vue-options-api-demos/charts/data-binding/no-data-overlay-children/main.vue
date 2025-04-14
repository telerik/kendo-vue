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
    <ChartNoDataOverlay>
      <div style="text-align: center; padding: 20px">
        <SvgIcon :icon="xCircleIcon" themeColor="error" size="xxlarge" />
        <p style="padding-top: 8px">There is no data to display.</p>
      </div>
    </ChartNoDataOverlay>
  </Chart>
</template>

<script>
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartNoDataOverlay,
} from "@progress/kendo-vue-charts";
import { SvgIcon } from "@progress/kendo-vue-common";
import { xCircleIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNoDataOverlay,
    SvgIcon,
  },
  data: function () {
    return {
      seriesData: [],
      xCircleIcon,
    };
  },
};
</script>
