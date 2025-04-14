<template>
  <Chart :style="{ margin: '0 auto', width: 300 }">
    <ChartTitle :text="'Sales funnel'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'funnel'"
        :data-items="dataItems"
        :category-field="'stat'"
        :field="'count'"
        :color-field="'color'"
      >
        <ChartSeriesLabels
          :color="'white'"
          :background="'none'"
          :format="'N0'"
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartTooltip :render="'tooltipRender'">
      <template v-slot:tooltipRender="{ props }">
        <span v-if="props">
          {{ props.point.dataItem.stat }}
        </span>
      </template>
    </ChartTooltip>
    <ChartLegend :visible="false" />
  </Chart>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-vue-charts";
import data from "./funnel-data.json";
export default {
  components: {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
  },
  data: function () {
    return {
      dataItems: data,
    };
  },
};
</script>