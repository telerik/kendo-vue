<template>
  <div>
    <IntlProvider :locale="enLocale">
      <div style="margin-bottom: 1em">
        <h5>Format Date and Number</h5>
        <div style="font-size: 1.2em">
          Result:
          <strong>
            <FormattedText
              template="Date: {0:d} - Price: {1:c}"
              :values="formatData"
              :locale="enLocale"
            />
          </strong>
        </div>
      </div>
    </IntlProvider>

    <IntlProvider :locale="enLocale">
      <div style="margin-bottom: 1em">
        <h5>Convert Date to String</h5>
        <div style="font-size: 1.2em">
          Result:
          <strong>
            <FormattedDate :value="newDate" format="d" :locale="enLocale" />
          </strong>
        </div>
      </div>
    </IntlProvider>

    <IntlProvider :locale="bgLocale">
      <div style="margin-bottom: 1em">
        <h5>Convert Number to String</h5>
        <div style="font-size: 1.2em">
          Result:
          <strong>
            <FormattedNumber :value="10.5" format="c" :locale="bgLocale" />
          </strong>
        </div>
      </div>
    </IntlProvider>
  </div>
</template>

<script>
import FormattedNumber from "./FormattedNumber.vue";
import FormattedDate from "./FormattedDate.vue";
import FormattedText from "./FormattedText.vue";
import { load, IntlProvider, IntlService } from "@progress/kendo-vue-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";
import enNumbers from "cldr-numbers-full/main/en/numbers.json";
import enCurrencies from "cldr-numbers-full/main/en/currencies.json";
import enCaGregorian from "cldr-dates-full/main/en/ca-gregorian.json";
import bgNumbers from "cldr-numbers-full/main/bg/numbers.json";
import bgCurrencies from "cldr-numbers-full/main/bg/currencies.json";
import bgCaGregorian from "cldr-dates-full/main/bg/ca-gregorian.json";

load(
    likelySubtags,
    currencyData,
    weekData,
    enNumbers,
    enCurrencies,
    enCaGregorian,
    bgNumbers,
    bgCurrencies,
    bgCaGregorian
);

export default {
    name: "App",
    data() {
        return {
            enLocale: "en",
            bgLocale: "bg",
            formatData: [new Date(), 10.5],
            newDate: new Date(),
        };
    },
    components: {
        FormattedNumber,
        FormattedText,
        FormattedDate,
        IntlProvider,
    },
};
</script>
