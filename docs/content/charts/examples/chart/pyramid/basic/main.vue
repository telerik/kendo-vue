<template>
  <div>
    <Chart>
      <ChartTitle :text="'Sales'" />
      <ChartSeries>
        <ChartSeriesItem
          :data-items="seriesData"
          :type="'pyramid'"
          :field="'count'"
          :categoryField="'stat'"
        >
          <ChartSeriesLabels :background="'none'" />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartTooltip :render="tooltipRenderer" />
      <ChartLegend :position="'bottom'" />
    </Chart>
  </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartLegend,
    ChartSeriesLabels
} from '@progress/kendo-vue-charts';

const seriesData = [
    { stat: 'Unique Visitors', count: 280022 },
    { stat: 'Downloads', count: 190374 },
    { stat: 'Purchases', count: 120392 }
];

const tooltipRenderer = (h, elem, props) => {
    if (props?.point) {
        const { category, percentage } = props.point;
        return h('span', {
            innerHTML: `${category}: ${Math.floor(percentage * 100)}%`,
        });
    }
};
</script>

<style scoped>
.k-chart {
  width: 300px;
  margin: 0 auto;
}
</style>
