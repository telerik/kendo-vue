<template>
  <Chart :donut-center-render="'donutCenterRenderer'">
    <template #donutCenterRenderer>
      <span><h3>22.5%</h3> of which renewables</span>
    </template>
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
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
  </Chart>
</template>

<script setup>
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartTooltip,
} from "@progress/kendo-vue-charts";
import data from "./power-distribution-data.json";
import { ref } from 'vue';

const labelContent = (e) => e.category;
const dataItems = ref(data);
</script>
