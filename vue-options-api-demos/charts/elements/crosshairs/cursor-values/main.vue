<template>
  <div>
    <Chart @plotareahover="onPlotAreaHover">
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories"
          :crosshair="crosshair"
        />
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
  methods: {
    onPlotAreaHover(args) {
      console.log(`Category: ${args.category}`);
      console.log(`Value: ${args.value}`);
    },
  },
};
</script>
