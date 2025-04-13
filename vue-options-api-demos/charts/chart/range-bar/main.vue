<template>
  <Chart>
    <ChartTitle :text="'Average Weather Conditions'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'rangeColumn'"
        :data-items="dataItems"
        :from-field="'min'"
        :to-field="'max'"
        :category-field="'month'"
      >
        <ChartSeriesLabels>
          <ChartSeriesLabelsFrom :content="labelContentFrom" />
          <ChartSeriesLabelsTo :content="labelContentTo" />
        </ChartSeriesLabels>
      </ChartSeriesItem>
    </ChartSeries>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :labels="{ rotation: 'auto' }" />
    </ChartCategoryAxis>
    <ChartTooltip :render="'tooltipRender'">
      <template v-slot:tooltipRender="{ props }">
        <div>
          Avg Min Temp : {{ props.point.value && props.point.value.from }} °C
          <br />
          Avg Max Temp : {{ props.point.value && props.point.value.to }} °C
        </div>
      </template>
    </ChartTooltip>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartSeriesLabelsFrom,
  ChartSeriesLabelsTo,
} from "@progress/kendo-vue-charts";
import data from "./range-data.json";

const labelContentFrom = (e) => `${e.value.from} °C`;
const labelContentTo = (e) => `${e.value.to} °C`;

export default {
  components: {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesLabelsFrom,
    ChartSeriesLabelsTo,
  },
  data: function () {
    return {
      dataItems: data,
      labelContentFrom: labelContentFrom,
      labelContentTo: labelContentTo,
    };
  },
};
</script>