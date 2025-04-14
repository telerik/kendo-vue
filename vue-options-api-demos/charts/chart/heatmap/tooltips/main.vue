<template>
  <Chart>
    <ChartTooltip :render="'defaultTooltipRender'">
      <template v-slot:defaultTooltipRender="{ props }">
        {{ props.point.value.value }} contributions on week
        {{ props.point.value.x }}, day
        {{ props.point.value.y }}
      </template>
    </ChartTooltip>
    <ChartSeries>
      <ChartSeriesItem :type="'heatmap'" :data-items="dataItems" />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem :visible="false" />
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :visible="false" />
    </ChartYAxis>
  </Chart>
</template>
<script>
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
} from '@progress/kendo-vue-charts';
import data from './heatmap-data';

export default {
    components: {
        Chart,
        ChartSeries,
        ChartSeriesItem,
        ChartTooltip,
        ChartXAxis,
        ChartXAxisItem,
        ChartYAxis,
        ChartYAxisItem,
    },
    data() {
        return {
            dataItems: data,
        };
    },
};
</script>
