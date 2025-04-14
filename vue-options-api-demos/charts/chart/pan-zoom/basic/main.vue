<template>
  <Chart :pannable="true" :zoomable="true">
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        :max="categoryAxisMax"
        :max-divisions="categoryAxisMaxDivisions"
      />
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem :labels="{ visible: true, format: '#.00' }" />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem
        :data-items="series"
        :field="'value'"
        :category-field="'category'"
      />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-vue-charts";
const series = [];
for (let idx = 0; idx < 10000; idx++) {
  series.push({
    value: Math.floor(Math.random() * 100) + 1,
    category: new Date(2000, 0, idx),
  });
}
export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
  },
  data: function () {
    return {
      series,
      categoryAxisMax: new Date(2000, 1, 0),
      categoryAxisMaxDivisions: 10,
    };
  },
};
</script>