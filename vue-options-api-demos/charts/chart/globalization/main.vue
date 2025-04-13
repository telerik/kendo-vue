<template>
  <div>
    <div class="example-config">
      <label>Current local</label>
      <DropDownList
        :style="{
          marginLeft: 5,
        }"
        :value="locale"
        @change="onChange"
        :data-items="['en', 'es']"
      />
    </div>
    <intl :locale="locale">
      <Chart>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem :categories="categories" />
        </ChartCategoryAxis>
        <ChartSeriesDefaults
          :type="'bar'"
          :labels="{
            visible: true,
            format: 'c',
          }"
        />
        <ChartSeries>
          <ChartSeriesItem :data-items="salesData" />
          <ChartSeriesItem :data-items="purchaseData" />
        </ChartSeries>
      </Chart>
    </intl>
  </div>
</template>
<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesDefaults,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-vue-charts";
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { IntlProvider, load } from "@progress/kendo-vue-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields
);
const salesData = [20, 40, 45, 30, 50];
const purchaseData = [12, 30, 30, 45, 10];
const categories = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default {
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesDefaults,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    intl: IntlProvider,
    numerictextbox: NumericTextBox,
    DropDownList,
  },
  data: function () {
    return {
      salesData: salesData,
      purchaseData: purchaseData,
      categories: categories,
      locale: "en",
    };
  },
  methods: {
    onChange(event) {
      this.locale = event.value;
    },
  },
};
</script>