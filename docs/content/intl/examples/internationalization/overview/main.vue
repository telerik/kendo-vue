<template>
  <IntlProvider :locale="locale">
    <div class="row">
      <Chooser
        :value="locale"
        :options="locales"
        label="Select locale"
        @change="onChange"
      />
      <DateFormatter />
      <CurrencyFormatter />
    </div>
  </IntlProvider>
</template>

<script setup>
import { ref } from "vue";
import { load, IntlProvider } from "@progress/kendo-vue-intl";
import CurrencyFormatter from "./CurrencyFormatter.vue";
import Chooser from "./Chooser.vue";
import DateFormatter from "./DateFormatter.vue";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import bgNumbers from "cldr-numbers-full/main/bg/numbers.json";
import bgLocalCurrency from "cldr-numbers-full/main/bg/currencies.json";
import bgCaGregorian from "cldr-dates-full/main/bg/ca-gregorian.json";
import bgDateFields from "cldr-dates-full/main/bg/dateFields.json";

import usNumbers from "cldr-numbers-full/main/en/numbers.json";
import usLocalCurrency from "cldr-numbers-full/main/en/currencies.json";
import usCaGregorian from "cldr-dates-full/main/en/ca-gregorian.json";
import usDateFields from "cldr-dates-full/main/en/dateFields.json";

import gbNumbers from "cldr-numbers-full/main/en-GB/numbers.json";
import gbLocalCurrency from "cldr-numbers-full/main/en-GB/currencies.json";
import gbCaGregorian from "cldr-dates-full/main/en-GB/ca-gregorian.json";
import gbDateFields from "cldr-dates-full/main/en-GB/dateFields.json";

load(
    likelySubtags,
    currencyData,
    weekData,
    bgNumbers,
    bgLocalCurrency,
    bgCaGregorian,
    bgDateFields,
    usNumbers,
    usLocalCurrency,
    usCaGregorian,
    usDateFields,
    gbNumbers,
    gbLocalCurrency,
    gbCaGregorian,
    gbDateFields
);

const locale = ref("en-US");
const locales = ["en-US", "bg-BG", "en-GB"];

function onChange(e) {
    locale.value = e.target.value;
}
</script>
