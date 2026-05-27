<template>
  <div>
    <div class="example-config">
      <label>Current local</label>
      <DropDownList
        :style="{ marginLeft: 5 }"
        :value="locale"
        @change="onChange"
        :data-items="['en', 'es']"
      />
    </div>
    <IntlProvider :locale="locale">
      <Chart>
        <ChartTooltip :visible="true" />
        <ChartLegend :position="'bottom'" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem :categories="categories" />
        </ChartCategoryAxis>
        <ChartSeriesDefaults
          :type="'bar'"
          :labels="{ visible: true, format: 'c' }"
        />
        <ChartSeries>
          <ChartSeriesItem :data-items="salesData" />
          <ChartSeriesItem :data-items="purchaseData" />
        </ChartSeries>
      </Chart>
    </IntlProvider>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesDefaults,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend,
} from "@progress/kendo-vue-charts";
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
const locale = ref("en");

const onChange = (event) => {
    locale.value = event.value;
};
</script>
