<template>
    <StockChart :style="{ height: '478px' }">
        <ChartSeries>
          <ChartSeriesItem
            :data-items="data"
            :type="'candlestick'"
            :open-field="'open'"
            :close-field="'close'"
            :low-field="'low'"
            :high-field="'high'"
            :category-field="'date'"
            :color="'#009688'"
          />
          <ChartSeriesItem
            :data-items="data"
            :type="'column'"
            :field="'volume'"
            :axis="'volume-axis'"
            :category-field="'date'"
            :tooltip='{ format: "{0:C0}" }'
            :color="'#009688'"
          />
        </ChartSeries>
        <ChartValueAxis>
          <ChartValueAxisItem :min="0" :major-unit="10">
          <ChartValueAxisLabels :step="1" />
            </ChartValueAxisItem>
          <ChartValueAxisItem
            :visible="false"
            :name="'volume-axis'"
            :pane="'volume-pane'"
          />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem :pane="'volume-pane'" />
        </ChartCategoryAxis>
        <ChartPanes>
          <ChartPane :title='{text: "Value", align: "center"}' :height="228" />
          <ChartPane :title='{text: "Volume", align: "center"}' :name="'volume-pane'" :height="150" />
        </ChartPanes>
        <ChartNavigator>
          <ChartNavigatorSelect :from="from" :to="to" />
          <ChartNavigatorSeries>
            <ChartNavigatorSeriesItem
              :data-items="data"
              :type="'area'"
              :field="'close'"
              :category-field="'date'"
              :color="'#009688'"
            />
          </ChartNavigatorSeries>
        </ChartNavigator>
      </StockChart>
</template>
<script setup>
import {
  StockChart,
  ChartSeries,
  ChartSeriesItem,
  ChartNavigator,
  ChartNavigatorSelect,
  ChartNavigatorSeries,
  ChartNavigatorSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartPanes,
  ChartCategoryAxisItem,
  ChartPane,
  ChartValueAxisLabels,
} from "@progress/kendo-vue-charts";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  }
});

const data = props.data;
const from = new Date("2020-04-12");
const to = new Date("2022-12-1");
</script>