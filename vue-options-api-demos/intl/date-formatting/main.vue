<template>
  <div>
    <IntlProvider :locale="enLocale">
      <div style="margin-bottom: 1em">
        <h5>Format 2000-11-06 using 'd'</h5>
        <div style="font-size: 1.2em">
          Result:
          <strong>
            <em>{{ formatDate(dateValue, "d", enLocale) }}</em>
          </strong>
        </div>
      </div>
    </IntlProvider>

    <IntlProvider :locale="deLocale">
      <div style="margin-bottom: 1em">
        <h5>Format 2000-11-06 using 'y.M.d'</h5>
        <div style="font-size: 1.2em">
          Result:
          <strong>
            <em>{{ formatDate(dateValue, "y.M.d", deLocale) }}</em>
          </strong>
        </div>
      </div>
    </IntlProvider>

    <IntlProvider :locale="bgLocale">
      <div style="margin-bottom: 1em">
        <h5>Format 2000-11-06 using "EEEE, d.MM.y" (Bulgarian locale)</h5>
        <div style="font-size: 1.2em">
          Result:
          <strong>
            <em>{{ formatDate(dateValue, "EEEE, d.MM.y", bgLocale) }}</em>
          </strong>
        </div>
      </div>
    </IntlProvider>
  </div>
</template>

<script>
import { load, IntlProvider, IntlService } from "@progress/kendo-vue-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import weekData from "cldr-core/supplemental/weekData.json";
import enCaGregorian from "cldr-dates-full/main/en/ca-gregorian.json";
import deCaGregorian from "cldr-dates-full/main/de/ca-gregorian.json";
import bgCaGregorian from "cldr-dates-full/main/bg/ca-gregorian.json";
import bgDateFields from "cldr-dates-full/main/bg/dateFields.json";
import bgTimeZoneNames from "cldr-dates-full/main/bg/timeZoneNames.json";

load(
    likelySubtags,
    weekData,
    enCaGregorian,
    deCaGregorian,
    bgCaGregorian,
    bgDateFields,
    bgTimeZoneNames
);

export default {
    name: "App",
    data() {
        return {
            dateValue: new Date(2000, 10, 6),
            enLocale: "en",
            deLocale: "de",
            bgLocale: "bg",
        };
    },
    methods: {
        formatDate(value, format, locale) {
            const intl = new IntlService(locale);
            const formattedDate = intl.formatDate(value, format);
            return formattedDate;
        },
    },
    components: {
        IntlProvider,
    },
};
</script>
