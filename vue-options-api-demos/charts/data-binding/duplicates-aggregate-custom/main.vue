<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        :data-items="seriesData"
        :type="'column'"
        :field="'sales'"
        :aggregate="customAggregate"
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
  methods: {
    customAggregate(values, series, dataItems, category) {
      return values.reduce((n, acc) => acc + n, 0);
    },
  },
  data: function () {
    return {
      seriesData: [
        {
          product: "Chai",
          sales: 200,
        },
        {
          product: "Chai",
          sales: 100,
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