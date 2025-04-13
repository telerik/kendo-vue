<template>
  <div>
    <Chart>
      <ChartPanes>
        <ChartPane :name="'top'" :clip="false" :title="'Clipping Disabled'" />
        <ChartPane :name="'bottom'" :title="'Clipping enabled (default)'" />
      </ChartPanes>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :justified="true" />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'top'" />
        <ChartValueAxisItem :name="'bottom'" :pane="'bottom'" />
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :type="'line'" :data-items="seriesData" />
        <ChartSeriesItem
          :type="'line'"
          :data-items="seriesData"
          :axis="'bottom'"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script>
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartPane,
  ChartPanes,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
} from '@progress/kendo-vue-charts';

export default {
  components: {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartPane,
    ChartPanes,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
  },
  data: function () {
    return {
      seriesData: [1, 2, 3, 5],
    };
  },
};
</script>
