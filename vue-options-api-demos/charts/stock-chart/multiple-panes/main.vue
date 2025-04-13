<template>
  <div>
    <StockChart
      :style="{
        height: '600px',
      }"
    >
      <ChartTitle :text="'The Boeing Company NYSE:BA'" />
      <ChartSeries>
        <ChartSeriesItem
          :data-items="stockData"
          :type="'candlestick'"
          :open-field="'Open'"
          :close-field="'Close'"
          :low-field="'Low'"
          :high-field="'High'"
          :category-field="'Date'"
        />
        <ChartSeriesItem
          :data-items="stockData"
          :type="'column'"
          :field="'Volume'"
          :axis="'volumeAxis'"
          :category-field="'Date'"
          :tooltip="{
            format: '{0:C0}',
          }"
        />
      </ChartSeries>
      <ChartValueAxis>
        <ChartValueAxisItem />
        <ChartValueAxisItem
          :visible="false"
          :name="'volumeAxis'"
          :pane="'volumePane'"
        />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :pane="'volumePane'" />
      </ChartCategoryAxis>
      <ChartPanes>
        <ChartPane :title="'Value'" :height="350" />
        <ChartPane :title="'Volume'" :name="'volumePane'" :height="150" />
      </ChartPanes>
      <ChartNavigator>
        <ChartNavigatorSelect :from="from" :to="to" />
        <ChartNavigatorSeries>
          <ChartNavigatorSeriesItem
            :data-items="stockData"
            :type="'area'"
            :field="'Close'"
            :category-field="'Date'"
          />
        </ChartNavigatorSeries>
      </ChartNavigator>
    </StockChart>
  </div>
</template>
<script>
import {
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartPane,
  ChartPanes,
  StockChart,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem,
} from "@progress/kendo-vue-charts";

import stockData from "./stock-data.json";
const from = new Date("2009/02/05");
const to = new Date("2011/10/07");

export default {
  components: {
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartPane,
    ChartPanes,
    StockChart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem,
  },
  data: function () {
    return {
      stockData: stockData,
      from: from,
      to: to,
    };
  },
};
</script>
