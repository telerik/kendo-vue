<template>
      <Chart>
          <ChartSeries>
              <ChartSeriesItem :type="'area'" :stack="{ type: '100%' }" :data-items="firstSeries" />
              <ChartSeriesItem :type="'area'" :data-items="secondSeries" />
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
    ChartSeriesItem
  },
  data: function () {
    return {
      firstSeries: [1, 2, 3, 5], 
      secondSeries: [5, 3, 2, 1]
    }
  },
};
</script>