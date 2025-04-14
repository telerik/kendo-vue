<template>
  <div>
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :data-items="data"
          :field="'value'"
          :error-low-field="'low'"
          :error-high-field="'high'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
  },
  data: function () {
    return {
      data: [
        {
          value: 4.743,
          low: 4.5,
          high: 5,
        },
        {
          value: 7.295,
          low: 7,
          high: 8,
        },
        {
          value: 6.376,
          low: 5,
          high: 6.5,
        },
      ],
    };
  },
};
</script>
