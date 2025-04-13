<template>
  <div>
    <Chart @selectend="onSelectEnd">
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories" :select="selection" />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem :data-items="series" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  data() {
    return {
      series: [1, 2, 3, 4],
      selection: {
        from: 1,
        to: 2,
      },
      categories: ['A', 'B', 'C', 'D'],
    };
  },
  methods: {
    onSelectEnd(args) {
      console.log(args);
    },
  },
};
</script>
