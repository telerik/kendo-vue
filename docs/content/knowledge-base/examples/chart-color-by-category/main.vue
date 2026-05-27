<template>
  <Chart>
    <ChartTitle text="Job Growth" />

    <ChartSeries>
      <ChartSeriesItem
        name="MySeriesName"
        type="bubble"
        x-field="x"
        y-field="y"
        size-field="size"
        category-field="category"
        :color="randomColor"
        :data-items="seriesData"
      />
    </ChartSeries>

    <ChartXAxis>
      <ChartXAxisItem
        :axis-crossing-value="-5000"
        :major-unit="2000"
        :plot-bands="xPlotBands"
        :labels="{ format: '{0:N0}', skip: 1, rotation: 'auto' }"
      />
    </ChartXAxis>

    <ChartYAxis>
      <ChartYAxisItem :labels="{ format: '{0:N0}' }" />
    </ChartYAxis>

    <ChartLegend :visible="true" position="right" />
    <ChartTooltip format="{3}: {2:N0} applications" :opacity="1" />
  </Chart>
</template>

<script>
import {
  Chart,
  ChartTooltip,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
} from '@progress/kendo-vue-charts';

import data from './bubble-data.json';

const MAX_HEX_COLOR = 0xffffff;

export default {
  name: 'ChartContainer',
  components: {
    Chart,
    ChartTooltip,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
  },
  data() {
    return {
      seriesData: data,
      xPlotBands: [{ from: -5000, to: 0, color: '#00f', opacity: 0.05 }],
      categoryColors: {},
    };
  },
  methods: {
    randomColor(point) {
      const key = point?.dataItem?.category;
      if (!key) {
        return '#cccccc';
      }
      if (this.categoryColors[key]) {
        return this.categoryColors[key];
      }
      const color =
        '#' +
        Math.floor(Math.random() * MAX_HEX_COLOR)
          .toString(16)
          .padStart(6, '0');
      this.categoryColors[key] = color;
      return color;
    },
  },
};
</script>
