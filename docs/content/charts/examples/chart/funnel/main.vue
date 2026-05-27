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
      <template #tooltipRender="{ props }">
        <span v-if="props">
          {{ props.point.dataItem.stat }}
        </span>
      </template>
    </ChartTooltip>
    <ChartLegend :position="'bottom'" />
  </Chart>
</template>
<script setup>
import { ref } from "vue";
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

const dataItems = ref(data);
</script>
