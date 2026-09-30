<template>
  <Card class="cashflow-card">
    <div class="cashflow-content">
      <div
        class="chart-heading"
      >
        <div
          :style="{
            fontSize: '20px',
            letterSpacing: 'wide',
            fontWeight: '500',
          }"
        >
          Money Cashflow
        </div>
        <div class="chart-legend">
          <div
            v-for="(item, idx) in series"
            :key="idx"
            class="legend-item"
            @click="() => (item.visible = !item.visible)"
          >
            <div
              :style="{
                backgroundColor: item.color,
                opacity: item.visible ? 1 : 0.5,
                width: '15px',
                height: '3px',
              }"
            ></div>
            {{ item.name }}
          </div>
        </div>
      </div>
      <div>
        <Chart>
          <ChartLegend :visible="false" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem :categories="categories">
              <ChartCategoryAxisLabels
                :rotation="categories.length > 12 ? undefined : 270"
                :content="(e) => e.value.toString().substring(0, 3)"
              />
            </ChartCategoryAxisItem>
          </ChartCategoryAxis>
          <ChartValueAxis>
            <ChartValueAxisItem
              :key="currency"
              :min="0"
              :labels="{
                content: (e) =>
                  `${displayCurrencySign(e.value / 1000, currency)}K`,
              }"
            />
          </ChartValueAxis>
          <ChartSeries>
            <ChartSeriesItem
              v-for="(item, idx) in series.filter((item) => item.visible)"
              :key="idx"
              :type="'column'"
              :data-items="item.data"
              :name="item.name"
              :color="item.color"
              :field="'flow'"
              :category-field="'month'"
            />
          </ChartSeries>
        </Chart>
      </div>
    </div>
  </Card>
</template>
<script setup>
import { ref, inject } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartCategoryAxisLabels,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-vue-charts";

import {
  bondsYearlyData,
  realEstateYearlyData,
  stocksYearlyData,
} from "../data/cashflow-data";
import { displayCurrencySign } from "@/utils/currency-converter";

const currency = inject("currency");

const categories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const defaultSeries = [
  {
    name: "Stocks",
    data: stocksYearlyData,
    color: "#9C27B0",
    visible: true,
  },
  {
    name: "Real Estate",
    data: realEstateYearlyData,
    color: "#009688",
    visible: true,
  },
  {
    name: "Bonds",
    data: bondsYearlyData,
    color: "#FFEB3B",
    visible: true,
  },
];

const series = ref(defaultSeries);
</script>
<style scoped>
.cashflow-card { padding: var(--kendo-spacing-4); gap: calc(3.5 * var(--kendo-spacing-base)); border-radius: var(--kendo-border-radius-xxl); }
.cashflow-content { display: grid; gap: var(--kendo-spacing-4); }
.chart-heading, .chart-legend, .legend-item { display: flex; align-items: center; }
.chart-heading { justify-content: space-between; gap: var(--kendo-spacing-2); }
.chart-legend { gap: var(--kendo-spacing-6); }
.legend-item { gap: var(--kendo-spacing-1); }
</style>
