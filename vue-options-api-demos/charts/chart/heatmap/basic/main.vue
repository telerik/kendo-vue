<template>
    <Chart
      :style="{
        width: '100%',
        height: '220px',
      }"
    >
      <ChartTitle
        :text="'Contributions per day'"
        :margin="{
          left: 40,
        }"
      />
      <ChartSeries>
        <ChartSeriesItem
          :type="'heatmap'"
          :data-items="seriesData"
          :color="'#216e39'"
          :labels="{
            visible: false,
          }"
          :markers="{
            type: 'roundedRect',
            border: {
              width: 2,
            },
          }"
        />
      </ChartSeries>

      <ChartXAxis>
        <ChartXAxisItem :visible="false" />
      </ChartXAxis>

      <ChartYAxis>
        <ChartYAxisItem
          :reverse="true"
          :line="{ visible: false }"
          :labels="{
            content: yAxisLabelContent,
          }"
        />
      </ChartYAxis>
    </Chart>
  </template>

<script>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxisItem,
    ChartXAxis,
    ChartYAxisItem,
    ChartYAxis,
} from '@progress/kendo-vue-charts';

import data from './heatmap-data';
const dayLabels = {
    1: 'Mon',
    3: 'Wed',
    5: 'Fri',
};
const yAxisLabelContent = (e) =>  dayLabels[e.value] || '';

export default {
    components: {
        Chart,
        ChartTitle,
        ChartSeries,
        ChartSeriesItem,
        ChartXAxisItem,
        ChartXAxis,
        ChartYAxisItem,
        ChartYAxis,
    },
    data() {
        return {
            seriesData: data,
            yAxisLabelContent,
        };
    },
};
</script>
