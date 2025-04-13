<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="data"
          :markers="{ type: markerType }"
        />
      </ChartSeries>
    </Chart>
    );
  </div>
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
  data() {
    return {
      data: [1, 2, 3],
      markerType: "cross",
    };
  },
};
</script>
