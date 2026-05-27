<template>
  <div>
    <KButton @click="exportSizedChart"> Export as PDF(scale)</KButton> &nbsp;
    <KButton @click="exportScaledChart"> Export as PDF(size) </KButton>
    <Chart ref="chartRef">
      <ChartTooltip :visible="true" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categoriesMonths"
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
          :data-items="llWeelRevenue"
          :axis="'RevenueAxis'"
        />
        <ChartSeriesItem
          :type="'line'"
          :line-style="'smooth'"
          :name="'HL Mountain Rear Weel'"
          :data-items="hlWeelRevenue"
          :axis="'RevenueAxis'"
        />
        <ChartSeriesItem
          :type="'line'"
          :line-style="'smooth'"
          :name="'ML Mountain Rear Weel'"
          :data-items="mlWeelRevenue"
          :axis="'RevenueAxis'"
        />
        <ChartSeriesMarkers :visible="false" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
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
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { saveAs } from '@progress/kendo-file-saver';
import { fit, exportPDF, Group } from '@progress/kendo-drawing';
import { Rect } from '@progress/kendo-drawing/geometry';
import { ref } from 'vue';

const mm = (val) => val * 2.8347;
const PAGE_RECT = new Rect([0, 0], [mm(210 - 20), mm(297 - 20)]);

const categoriesMonths = [
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
];
const hlWeelRevenue = [
    13422.62, 23559.48, 20056.31, 10798.09, 17080.62, 13154.04, 8049.48,
    10012.77,
];
const mlWeelRevenue = [
    8616.04, 16621.06, 15166.35, 6231.06, 11895.66, 11470.81, 5381.37,
    6231.06,
];
const llWeelRevenue = [
    3849.72, 8577.45, 5470.65, 4525.11, 7226.67, 3782.18, 2026.17, 4525.11,
];

const chartRef = ref(null);

const exportChartVisualSizedChart = (callback) => {
    const chartVisual = exportVisual(chartRef.value, {
        width: PAGE_RECT.size.width,
    });
    if (chartVisual) {
        callback(chartVisual);
    }
};

const exportChartVisualScaledChart = (callback) => {
    const chartVisual = exportVisual(chartRef.value, {});
    const content = new Group();
    content.append(chartVisual);
    fit(content, PAGE_RECT);
    if (content) {
        callback(content);
    }
};

const exportSizedChart = () => {
    exportChartVisualSizedChart((chartVisual) =>
        exportPDF(chartVisual, {
            paperSize: 'A4',
            margin: '1cm',
        }).then((dataURI) => saveAs(dataURI, 'chart.pdf'))
    );
};

const exportScaledChart = () => {
    exportChartVisualScaledChart((chartVisual) =>
        exportPDF(chartVisual, {
            paperSize: 'A4',
            margin: '1cm',
        }).then((dataURI) => saveAs(dataURI, 'chart.pdf'))
    );
};
</script>
