<template>
 <div class="row">
        <div class="col-xs-12 col-sm-4 example-col">
          Date: <strong>{{date.toString()}}</strong>
        </div>
        <div class="col-xs-12 col-sm-4 example-col">
          <dateformatter />
          Formatted using the default "bg" locale:
          <strong>
            <intl :locale="'bg'">
              <dateformatter :date='date' />
            </intl>
          </strong>
        </div>
        <div class="col-xs-12 col-sm-4 example-col">
          Formatted using the "de" locale:
          <strong>
            <intl :locale="'de'">
              <dateformatter :date='date' />
            </intl>
          </strong>
        </div>
      </div>
</template>

<script>
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

import { IntlProvider, load } from "@progress/kendo-vue-intl";
import DateFormatter from "./DateFormatter.vue";

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

export default {
    components: {
      'intl': IntlProvider,
      'dateformatter':DateFormatter
      },
    data: function () {
        return {
            date: new Date()
        }
    }
};

</script>
