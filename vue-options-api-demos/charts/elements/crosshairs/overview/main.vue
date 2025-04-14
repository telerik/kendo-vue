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
        <ChartValueAxisItem :crosshair="crosshair" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="data" />
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
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      data: [1, 2, 3],
      categories: ['A', 'B', 'C'],
      crosshair: {
        visible: true,
        tooltip: {
          visible: true,
          format: '#.##',
        },
      },
    };
  },
};
</script>
