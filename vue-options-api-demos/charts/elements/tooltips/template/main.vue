<template>
  <div>
    <Chart>
      <ChartTooltip :render="'defaultTooltipRender'">
        <template v-slot:defaultTooltipRender="{ props }">
          Default Content {{ props.point.value }}
        </template>
      </ChartTooltip>

      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" />
        <ChartSeriesItem :data-items="seriesData">
          <ChartSeriesItemTooltip :render="'nestedTooltipRender'">
            <template v-slot:nestedTooltipRender="{ props }">
              <span
                ><b>Series 1 value: {{ props.point.value }}</b></span
              >
            </template>
          </ChartSeriesItemTooltip>
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesItemTooltip,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
  },
  data() {
    return {
      seriesData: [1, 2, 3],
    };
  },
};
</script>
