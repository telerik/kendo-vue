<template>
  <Chart>
    <ChartTooltip :render="'renderTooltip'">
      <template v-slot:renderTooltip="{ props }">
        <div v-if="props">
          {{ props.point.category }} ({{ props.point.series.name }}):
          {{ props.point.value }}%
        </div>
      </template>
    </ChartTooltip>
    <ChartTitle :text="'Share of Internet Population Growth'" />
    <ChartLegend :visible="false" />
    <ChartArea :background="'none'" />
    <ChartSeries>
      <ChartSeriesItem
        v-for="(series, index) in internetGrowthData"
        :type="'donut'"
        :key="index"
        :startAngle="150"
        :name="series.name"
        :data-items="series.data"
        :field="'value'"
        :category-field="'category'"
        :color-field="'color'"
      >
        <ChartSeriesLabels
          :position="'outsideEnd'"
          :background="'none'"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartArea,
  ChartTitle,
  ChartTooltip,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-vue-charts";

import internetGrowthData from "./donut-series-data.json";
const labelContent = function (e) {
  return `${e.category}: \n ${e.value}%`;
};

export default {
  components: {
    Chart,
    ChartArea,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  },
  data: function () {
    return {
      internetGrowthData: internetGrowthData,
      labelContent: labelContent,
    };
  },
};
</script>
