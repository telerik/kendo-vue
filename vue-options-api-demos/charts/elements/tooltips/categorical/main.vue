<template>
  <div>
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories">
          <ChartCategoryAxisCrosshair>
            <ChartCategoryAxisCrosshairTooltip />
          </ChartCategoryAxisCrosshair>
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem>
          <ChartValueAxisCrosshair>
            <ChartValueAxisCrosshairTooltip />
          </ChartValueAxisCrosshair>
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="seriesData" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartCategoryAxisCrosshair,
  ChartCategoryAxisCrosshairTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartValueAxisCrosshair,
  ChartValueAxisCrosshairTooltip,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisCrosshair,
    ChartCategoryAxisCrosshairTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartValueAxisCrosshair,
    ChartValueAxisCrosshairTooltip,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      seriesData: [1, 2, 3],
      categories: ['A', 'B', 'C'],
    };
  },
};
</script>
