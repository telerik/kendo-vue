<template>
  <div>
    <Chart :style="{ height: '320px' }">
      <ChartTooltip :visible="true" :shared="true" />
      <ChartTitle :text="'Sales and Revenue Total'" :position="'top'" :align="'center'" />
      <ChartLegend :position="chartPosition" :labels="{ font: labelSize }" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :labels="{ rotation: 'auto', padding: '3', font: labelSize }"
          :categories="categories_months"
          :axisCrossingValue="[0, 20]"
          :start-angle="45"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'items'">
          <ChartValueAxisTitle :text="'Sold items (thousands)'" :font="labelSize" />
          <ChartValueAxisLabels :format="'{0:C}M'" :padding="3" :font="labelSize" />
        </ChartValueAxisItem>
        <ChartValueAxisItem :name="'RevenueAxis'">
          <ChartValueAxisTitle :text="'Revenue'" :font="labelSize" />
          <ChartValueAxisLabels :format="'{0:C}M'" :padding="3" :font="labelSize" />
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem
          :name="'LL Mountain Rear Weel'"
          :data-items="ll_weel_series"
          :type="'column'"
          :axis="'items'"
          :color="'rgb(148, 236, 255)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="patterns.vertical"
        />
        <ChartSeriesItem :name="'Total revenue'" :axis="'RevenueAxis'" :data-items="total_revenue" :type="'line'" />
        <ChartSeriesItem
          :name="'HL Mountain Rear Weel'"
          :data-items="hl_weel_series"
          :type="'column'"
          :axis="'items'"
          :color="'rgb(250, 201, 187)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="patterns.crosshatch"
        />
        <ChartSeriesItem
          :name="'ML Mountain Rear Weel'"
          :data-items="ml_weel_series"
          :type="'column'"
          :axis="'items'"
          :color="'rgb(255, 208, 223)'"
          :overlay="{ gradient: 'none' }"
          :border="{ width: 0 }"
          :pattern="patterns.diagonal"
        />
      </ChartSeries>
    </Chart>

    <div class="mt-md k-d-flex k-flex-wrap">
      <div class="k-flex-grow mb-md kd-border kd-rounded chart-item">
        <Chart :style="{ height: '260px', width: 'auto' }">
          <ChartTooltip :visible="true" />
          <ChartLegend :position="chartPosition" :labels="{ font: labelSize }" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem
              :labels="{ rotation: 'auto', padding: '3', font: labelSize }"
              :categories="categories_months"
              :axisCrossingValue="[0, 20]"
              :start-angle="45"
            />
          </ChartCategoryAxis>
          <ChartTitle :text="'Revenue Trend per Product'" />
          <ChartValueAxis>
            <ChartValueAxisItem :name="'RevenueAxis'">
              <ChartValueAxisTitle :text="'Revenue'" :font="labelSize" />
              <ChartValueAxisLabels :format="'{0:C}M'" :padding="3" :font="labelSize" />
            </ChartValueAxisItem>
          </ChartValueAxis>
          <ChartSeries>
            <ChartSeriesItem :type="'line'" :line-style="'smooth'" :name="'LL Mountain Rear Weel'" :data-items="ll_weel_revenue" :axis="'RevenueAxis'" />
            <ChartSeriesItem :type="'line'" :line-style="'smooth'" :name="'HL Mountain Rear Weel'" :data-items="hl_weel_revenue" :axis="'RevenueAxis'" />
            <ChartSeriesItem :type="'line'" :line-style="'smooth'" :name="'ML Mountain Rear Weel'" :data-items="ml_weel_revenue" :axis="'RevenueAxis'" />
            <ChartSeriesMarkers :visible="false" />
          </ChartSeries>
        </Chart>
      </div>

      <div class="k-flex-grow mb-md kd-border kd-rounded chart-item">
        <Chart :style="{ height: '260px', width: 'auto' }">
          <ChartTooltip :visible="true" />
          <ChartLegend :visible="false" />
          <ChartTitle :text="'Sales Distribution for the Last Year'" />
          <ChartSeries>
            <ChartSeriesItem
              :auto-fit="true"
              :type="'donut'"
              :name="'HL Mountain Rear Weel'"
              :data-items="year_sales"
              :category-field="'kind'"
              :field="'share'"
              :pattern="patterns.dots"
            >
              <ChartSeriesLabels :position="'outsideEnd'" :content="labelContent" />
            </ChartSeriesItem>
          </ChartSeries>
        </Chart>
      </div>
    </div>

    <Chart :style="{ height: '260px' }">
      <ChartTooltip :visible="true" />
      <ChartLegend :position="chartPosition" :labels="{ font: labelSize }" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :labels="{ rotation: 'auto', padding: '3', font: labelSize }" :categories="categories_months" />
      </ChartCategoryAxis>
      <ChartTitle :text="'Revenue Trend per Product'" />
      <ChartValueAxis>
        <ChartValueAxisItem>
          <ChartValueAxisLabels :font="labelSize" />
        </ChartValueAxisItem>
      </ChartValueAxis>
      <ChartSeries>
        <ChartSeriesItem :stack="{ type: '100%' }" :type="'area'" :name="'LL Mountain Rear Weel'" :data-items="ll_weel_revenue" :pattern="patterns.vertical" />
        <ChartSeriesItem :stack="{ type: '100%' }" :type="'area'" :name="'ML Mountain Rear Weel'" :data-items="ml_weel_revenue" :pattern="patterns.grid" />
        <ChartSeriesItem :stack="{ type: '100%' }" :type="'area'" :name="'HL Mountain Rear Weel'" :data-items="hl_weel_revenue" :pattern="patterns.diagonal" />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import {
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartLegend,
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
} from '@progress/kendo-vue-charts';
import { ref, computed } from 'vue';

const chartPosition = computed(() => (window.innerWidth > 1000 ? 'right' : 'bottom'));
const labelSize = computed(() => (window.innerWidth > 600 ? '12px Arial, sans-serif' : '8px Arial, sans-serif'));

const patterns = {
    vertical: {
        type: 'verticalStripes',
        background: 'rgb(75, 96, 250)',
        width: 1.2,
        gap: 12,
    },
    crosshatch: {
        type: 'crosshatch',
        background: 'rgb(172, 88, 255)',
        width: 1.2,
        gap: 12,
    },
    diagonal: {
        type: 'diagonalStripes',
        background: 'rgb(255, 146, 184)',
        width: 1.2,
        gap: 12,
    },
    grid: {
        type: 'grid',
        background: 'rgb(255, 148, 109)',
        size: 12,
        gap: 1.2,
    },
    dots: {
        type: 'dots',
        background: 'rgba(255, 255, 99, 0.5)',
        radius: 7.2,
        gap: 3.6,
    },
};

const year_sales = ref([
    { kind: 'LL Mountain Rear Weel', share: 201 },
    { kind: 'ML Mountain Rear Weel', share: 235 },
    { kind: 'HL Mountain Rear Weel', share: 283 },
]);

const hl_weel_series = ref([10, 40, 9, 30, 67, 54, 31, 42]);
const ml_weel_series = ref([12, 73, 12, 33, 11, 32, 44, 18]);
const ll_weel_series = ref([20, 40, 18, 32, 35, 11, 43, 2]);

const hl_weel_revenue = ref([
    13422.62, 23559.48, 20056.31, 10798.09, 17080.62, 13154.04, 8049.48, 10012.77,
]);

const ml_weel_revenue = ref([
    8616.04, 16621.06, 15166.35, 6231.06, 11895.66, 11470.81, 5381.37, 6231.06,
]);

const ll_weel_revenue = ref([
    3849.72, 8577.45, 5470.65, 4525.11, 7226.67, 3782.18, 2026.17, 4525.11,
]);

const total_revenue = ref([
    2234234, 5233334, 4242342, 4233222, 3555334, 1434221, 3943343, 2533633,
]);

const categories_months = ref([
    'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
]);

const labelContent = (e) => `${e.category}: \n ${e.value} pcs`;
</script>

<style>
.chart-item {
  width: 50%;
  min-width: 500px;
}

@media only screen and (max-width: 600px) {
  .chart-item {
    min-width: 250px;
  }
}
</style>
