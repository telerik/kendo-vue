<template>
  <div>
    <Chart>
      <ChartPaneDefaults :margin="10">
        <ChartPaneDefaultsTitle :font="'700 18px sans-serif'" />
      </ChartPaneDefaults>
      <ChartPanes>
        <ChartPane :name="'top'" :title="'Sales'" />
        <ChartPane :name="'bottom'" :title="'Inventory'" />
      </ChartPanes>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'top'" />
        <ChartValueAxisItem :name="'bottom'" :pane="'bottom'" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData[0]" />
        <ChartSeriesItem
          :type="'line'"
          :data-items="seriesData[1]"
          :axis="'bottom'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartPane,
  ChartPaneDefaults,
  ChartPaneDefaultsTitle,
  ChartPanes,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartPane,
    ChartPaneDefaults,
    ChartPaneDefaultsTitle,
    ChartPanes,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      seriesData: [
        [1, 2, 3, 5],
        [5, 4, 3, 1],
      ],
    };
  },
};
</script>
