<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        v-for="(item, index) in series"
        :key="index"
        :data-items="item.items"
        :name="item.value"
        :field="'value'"
        :category-field="'interval'"
        :type="'line'"
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
import { groupBy } from "@progress/kendo-data-query";


export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  mounted() {
    this.series = groupBy(this.data, [{ field: "service" }]);
  },
  data: function () {
    return {
      series: null,
      data: [
        {
          interval: 1,
          service: "Service 1",
          value: 5,
        },
        {
          interval: 2,
          service: "Service 1",
          value: 15,
        },
        {
          interval: 3,
          service: "Service 1",
          value: 10,
        },
        {
          interval: 1,
          service: "Service 2",
          value: 10,
        },
        {
          interval: 2,
          service: "Service 2",
          value: 5,
        },
        {
          interval: 3,
          service: "Service 2",
          value: 15,
        },
      ],
    };
  },
};
</script>