<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :data-items="seriesData"
        :type="'column'"
        :field="'sales'"
        :category-field="'product'"
      />
    </ChartSeries>
  </Chart>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-vue-charts";

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      seriesData: [
        {
          product: "Chai",
          sales: 200,
        },
        {
          product: "Others",
          sales: 250,
        },
      ],
    };
  },
};
</script>