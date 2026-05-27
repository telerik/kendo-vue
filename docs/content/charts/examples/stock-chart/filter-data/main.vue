<template>
  <div>
    <StockChart>
      <ChartTitle :text="'The Boeing Company NYSE:BA'" />
      <ChartSeries>
        <ChartSeriesItem
          :data-items="stockChartData"
          :type="'candlestick'"
          :open-field="'Open'"
          :close-field="'Close'"
          :low-field="'Low'"
          :high-field="'High'"
          :category-field="'Date'"
        />
      </ChartSeries>
      <ChartNavigator>
        <ChartNavigatorSelect :from="from" :to="to" />
        <ChartNavigatorSeries>
          <ChartNavigatorSeriesItem
            :data-items="stockNavigatorData"
            :type="'area'"
            :field="'Close'"
            :category-field="'Date'"
          />
        </ChartNavigatorSeries>
        <ChartNavigatorCategoryAxis />
        <ChartNavigatorPane />
      </ChartNavigator>
    </StockChart>
  </div>
</template>
<script setup>
import {
    StockChart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem,
    ChartNavigatorCategoryAxis,
    ChartNavigatorPane,
} from "@progress/kendo-vue-charts";
import { IntlService } from "@progress/kendo-vue-intl";
import { ref } from "vue";

import data from "./stock-data.json";
const intl = new IntlService("en");
const stockData = data.map((item) =>
    Object.assign({}, item, { Date: intl.parseDate(item.Date) })
);

const stockNavigatorData = ref(stockData);
const stockChartData = ref(stockData);
const from = ref(new Date("2009/02/05"));
const to = ref(new Date("2011/10/07"));
</script>
