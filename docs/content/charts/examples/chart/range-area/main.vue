<template>
  <Chart>
    <ChartLegend :position="'bottom'" />
    <ChartTitle :text="'Average Weather Conditions'" />
    <ChartSeries>
      <ChartSeriesItem
        :type="'rangeArea'"
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
      <template #tooltipRender="{ props }">
        <div>
          Avg Min Temp : {{ props.point.value && props.point.value.from }} °C
          <br />
          Avg Max Temp : {{ props.point.value && props.point.value.to }} °C
        </div>
      </template>
    </ChartTooltip>
  </Chart>
</template>

<script setup>
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
    ChartLegend,
} from "@progress/kendo-vue-charts";
import data from "./range-data.json";
import { ref } from 'vue';

const labelContentFrom = (e) => `${e.value.from} °C`;
const labelContentTo = (e) => `${e.value.to} °C`;

const dataItems = ref(data);
</script>
