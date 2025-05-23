<template>
  <Card class="k-p-4 k-gap-4 k-rounded-xxl k-gap-3.5">
    <div class="k-d-grid k-gap-4">
      <div
        class="k-d-flex k-align-items-center k-gap-2 k-justify-content-between"
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
        <div class="k-d-flex k-align-items-center k-gap-6">
          <div
            v-for="(item, idx) in series"
            :key="idx"
            class="k-d-flex k-align-items-center k-gap-1"
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
