<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :type="'donut'"
        :data-items="dataItems"
        :category-field="'kind'"
        :field="'share'"
      >
        <ChartSeriesLabels
          :color="'#fff'"
          :background="'none'"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend :visible="false" />
  </Chart>
</template>
<script>
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-vue-charts";
import data from "./power-distribution-data.json";

const labelContent = (e) => e.category;

export default {
  components: {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  },
  data: function () {
    return {
      dataItems: data,
      labelContent: labelContent,
    };
  },
};
</script>
