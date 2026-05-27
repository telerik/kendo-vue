<template>
  <div>
    <KButton @click="onImageExportClick">Export as Image</KButton>
    <Chart ref="chart">
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
} from "@progress/kendo-vue-charts";
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { saveAs } from "@progress/kendo-file-saver";
import { exportImage } from "@progress/kendo-drawing";
import { ref } from 'vue';

const categoriesMonths = [
    "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const hlWeelRevenue = [
    13422.62, 23559.48, 20056.31, 10798.09, 17080.62, 13154.04, 8049.48, 10012.77
];
const mlWeelRevenue = [
    8616.04, 16621.06, 15166.35, 6231.06, 11895.66, 11470.81, 5381.37, 6231.06
];
const llWeelRevenue = [
    3849.72, 8577.45, 5470.65, 4525.11, 7226.67, 3782.18, 2026.17, 4525.11
];

const chartRef = ref(null);

const exportChartVisual = (callback) => {
    const chartVisual = exportVisual(chartRef.value, {
        width: 1200,
        height: 800,
    });
    if (chartVisual) {
        callback(chartVisual);
    }
};

const onImageExportClick = () => {
    exportChartVisual((chartVisual) =>
        exportImage(chartVisual).then((dataURI) => saveAs(dataURI, "chart.png"))
    );
};
</script>
