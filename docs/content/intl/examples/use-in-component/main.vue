<template>
  <div class="row">
    <div class="col-xs-12 col-sm-4 example-col">
      Date: <strong>{{ date.toString() }}</strong>
    </div>
    <div class="col-xs-12 col-sm-4 example-col">
      <DateFormatter />
      Formatted using the default "bg" locale:
      <strong>
        <IntlProvider :locale="'bg'">
          <DateFormatter :date="date" />
        </IntlProvider>
      </strong>
    </div>
    <div class="col-xs-12 col-sm-4 example-col">
      Formatted using the "de" locale:
      <strong>
        <IntlProvider :locale="'de'">
          <DateFormatter :date="date" />
        </IntlProvider>
      </strong>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { IntlProvider, load } from "@progress/kendo-vue-intl";
import DateFormatter from "./DateFormatter.vue";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import bgNumbers from "cldr-numbers-full/main/bg/numbers.json";
import bgLocalCurrency from "cldr-numbers-full/main/bg/currencies.json";
import bgCaGregorian from "cldr-dates-full/main/bg/ca-gregorian.json";
import bgDateFields from "cldr-dates-full/main/bg/dateFields.json";

import deNumbers from "cldr-numbers-full/main/de/numbers.json";
import deLocalCurrency from "cldr-numbers-full/main/de/currencies.json";
import deCaGregorian from "cldr-dates-full/main/de/ca-gregorian.json";
import deDateFields from "cldr-dates-full/main/de/dateFields.json";

load(
    likelySubtags,
    currencyData,
    weekData,
    bgLocalCurrency,
    bgNumbers,
    bgCaGregorian,
    bgDateFields,
    deLocalCurrency,
    deNumbers,
    deCaGregorian,
    deDateFields
);

const date = ref(new Date());
</script>
