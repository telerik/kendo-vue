<template>
  <div>
    <kbutton @click="exportSizedChart"> Export as PDF(scаle)</kbutton>&nbsp
    <kbutton @click="exportScaledChart"> Export as PDF(size) </kbutton>
    <Chart ref="chart">
      <ChartTooltip :visible="true" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories_months"
          :axisCrossingValue="[0, 20]"
          :start-angle="45"
        />
      </ChartCategoryAxis>
      <ChartTitle :text="'Revenue Trend per Product'" />
      <ChartValueAxis>
        <ChartValueAxisItem :name="'RevenueAxis'">
          <ChartValueAxisTitle :text="'Revenue'" />
          <ChartValueAxisLabels :format="'{0:C}M'" />
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :line-style="'smooth'"
          :name="'LL Mountain Rear Weel'"
          :data-items="ll_weel_revenue"
          :axis="'RevenueAxis'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :type="'line'"
          :line-style="'smooth'"
          :name="'HL Mountain Rear Weel'"
          :data-items="hl_weel_revenue"
          :axis="'RevenueAxis'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :type="'line'"
          :line-style="'smooth'"
          :name="'ML Mountain Rear Weel'"
          :data-items="ml_weel_revenue"
          :axis="'RevenueAxis'"
        >
        </ChartSeriesItem>
        <ChartSeriesMarkers :visible="false" />
      </ChartSeries>
    </Chart>
  </div>
</template>
<script>
import {
  ChartSeriesMarkers,
  ChartValueAxisTitle,
  ChartValueAxisLabels,
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
  exportVisual,
} from '@progress/kendo-vue-charts';
import { Button } from '@progress/kendo-vue-buttons';
import { saveAs } from '@progress/kendo-file-saver';
import { fit, exportPDF, Group } from '@progress/kendo-drawing';
import { Rect } from '@progress/kendo-drawing/geometry';
const mm = (val) => val * 2.8347;
const PAGE_RECT = new Rect([0, 0], [mm(210 - 20), mm(297 - 20)]);
export default {
  components: {
    ChartSeriesMarkers,
    ChartValueAxisTitle,
    ChartValueAxisLabels,
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    kbutton: Button,
  },
  data: function () {
    return {
      categories_months: [
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],
      hl_weel_revenue: [
        13422.62, 23559.48, 20056.31, 10798.09, 17080.62, 13154.04, 8049.48,
        10012.77,
      ],
      ml_weel_revenue: [
        8616.04, 16621.06, 15166.35, 6231.06, 11895.66, 11470.81, 5381.37,
        6231.06,
      ],
      ll_weel_revenue: [
        3849.72, 8577.45, 5470.65, 4525.11, 7226.67, 3782.18, 2026.17, 4525.11,
      ],
    };
  },
  methods: {
    exportChartVisualSizedChart(callback) {
      const chartVisual = exportVisual(this.$refs.chart, {
        width: PAGE_RECT.size.width,
      });
      if (chartVisual) {
        callback(chartVisual);
      }
    },
    exportChartVisualScaledChart(callback) {
      const chartVisual = exportVisual(this.$refs.chart, {});
      const content = new Group();
      content.append(chartVisual);
      fit(content, PAGE_RECT);
      if (content) {
        callback(content);
      }
    },
    exportSizedChart() {
      this.exportChartVisualSizedChart((chartVisual) =>
        exportPDF(chartVisual, {
          paperSize: 'A4',
          margin: '1cm',
        }).then((dataURI) => saveAs(dataURI, 'chart.pdf'))
      );
    },
    exportScaledChart() {
      this.exportChartVisualScaledChart((chartVisual) =>
        exportPDF(chartVisual, {
          paperSize: 'A4',
          margin: '1cm',
        }).then((dataURI) => saveAs(dataURI, 'chart.pdf'))
      );
    },
  },
};
</script>
