<template>
  <Chart>
    <ChartTooltip :visible="true" />
    <ChartLegend :position="'bottom'" />
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

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartNoDataOverlay,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
import { SvgIcon } from "@progress/kendo-vue-common";
import { xCircleIcon } from "@progress/kendo-svg-icons";
import { ref } from 'vue';

const seriesData = ref([]);
</script>
