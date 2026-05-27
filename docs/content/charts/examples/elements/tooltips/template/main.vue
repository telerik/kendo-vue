<template>
  <div>
    <Chart>
      <ChartLegend :position="'bottom'" />
      <ChartTooltip :render="'defaultTooltipRender'">
        <template #defaultTooltipRender="{ props }">
          Default Content {{ props.point.value }}
        </template>
      </ChartTooltip>

      <ChartSeries>
        <ChartSeriesItem :name="'Series 0'" :data-items="seriesData" />
        <ChartSeriesItem :name="'Series 1'" :data-items="seriesData">
          <ChartSeriesItemTooltip :render="'nestedTooltipRender'">
            <template #nestedTooltipRender="{ props }">
              <span><b>Series 1 value: {{ props.point.value }}</b></span>
            </template>
          </ChartSeriesItemTooltip>
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
    ChartLegend,
} from '@progress/kendo-vue-charts';
import { ref } from 'vue';

const seriesData = ref([1, 2, 3]);
</script>
