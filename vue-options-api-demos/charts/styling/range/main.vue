<template>
  <Chart
    :pannable="{
      lock: 'y',
    }"
    :zoomable="{
      mousewheel: {
        lock: 'y',
      },
    }"
  >
    <ChartTitle :text="'My line chart'" />
    <ChartTooltip :format="'{0}'" />
    <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        :categories="data.categories"
        :max="20"
        :labels="{
          rotation: 'auto',
        }"
      />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        :data-items="data.series.data"
        :type="'line'"
        :line-style="'smooth'"
        :name="data.series.name"
      />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartLegend,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
  },
  created() {
    const data = {
      categories: [],
      series: {
        name: "My data over time",
        data: [],
      },
    };

    for (let i = 0; i < 200; i++) {
      data.categories.push(this.baseYear + i);
      data.series.data.push(Math.floor(Math.random() * 200));
    }
    this.data = data;
  },
  data: function () {
    return {
      baseYear: 2000,
      data: null,
    };
  },
};
</script>