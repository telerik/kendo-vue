<template>
  <div>
    <Chart>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="['A', 'B', 'C']"
          :plotBands="categoryPlotBands"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :plot-bands="valuePlotBands" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="[1, 2, 3]" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
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
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      categoryPlotBands: [
        {
          from: 1,
          to: 2,
          color: '#ffd246',
          opacity: 0.8,
          label: {
            text: 'Yellow Zone',
            font: '18px sans-serif',
            color: '#444',
            margin: 5,
          },
        },
      ],
      valuePlotBands: [
        {
          from: 2,
          to: 3,
          color: '#78d237',
          opacity: 0.8,
          label: {
            text: 'Green Zone',
            font: '18px sans-serif',
            color: '#444',
            margin: 5,
          },
        },
      ],
    };
  },
};
</script>
