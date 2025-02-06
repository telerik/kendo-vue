<template>
  <div>
    <localization :language="localizationLanguage">
      <intl :locale="locale">
        <Header @localeChange="onLocaleChange" @themeChange="onThemeChange" />
        <div class="content-wrapper">
          <div class="column menu">
            <MenuNavContainer :current-theme="currentTheme.toLowerCase()" />
          </div>
          <div class="column content">
            <div class="k-drawer-container k-drawer-mini k-drawer-push">
              <div class="card-container">
                <router-view
                  :localization-language="localizationLanguage"
                  :current-theme="currentTheme"
                ></router-view>
              </div>
            </div>
          </div>
        </div>
      </intl>
    </localization>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MenuNavContainer from "./components/MenuNavContainer.vue";
import { enComponentMessages, enCustomMessages } from "./messages/en-US";
import { esComponentMessages, esCustomMessages } from "./messages/es";
import { frComponentMessages, frCustomMessages } from "./messages/fr";

import {
  load,
  LocalizationProvider,
  IntlProvider,
  loadMessages,
} from "@progress/kendo-vue-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import numbers from "cldr-numbers-full/main/es/numbers.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import esNumbers from "cldr-numbers-full/main/es/numbers.json";
import esCurrencies from "cldr-numbers-full/main/es/currencies.json";

import frNumbers from "cldr-numbers-full/main/fr/numbers.json";
import frCaGregorian from "cldr-dates-full/main/fr/ca-gregorian.json";
import frDateFields from "cldr-dates-full/main/fr/dateFields.json";
import frTimeZoneNames from "cldr-dates-full/main/fr/timeZoneNames.json";
import frCurrencies from "cldr-numbers-full/main/fr/currencies.json";

load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  caGregorian,
  dateFields,
  timeZoneNames,
  esNumbers,
  esCurrencies,
  frNumbers,
  frCaGregorian,
  frDateFields,
  frTimeZoneNames,
  frCurrencies
);

loadMessages(enCustomMessages, "English");
loadMessages(enComponentMessages, "English");
loadMessages(esCustomMessages, "Spanish");
loadMessages(esComponentMessages, "Spanish");
loadMessages(frCustomMessages, "French");
loadMessages(frComponentMessages, "French");

export default {
  name: "app",
  components: {
    Header,
    MenuNavContainer,
    localization: LocalizationProvider,
    intl: IntlProvider,
  },
  methods: {
    onLocaleChange(e) {
      this.localizationLanguage = e.language;
    },
    onThemeChange(e) {
      this.currentTheme = e;
    },
  },
  computed: {
    locale() {
      if (this.localizationLanguage === "Spanish") {
        return "es";
      }

      if (this.localizationLanguage === "French") {
        return "fr";
      }

      return "en";
    },
  },
  data() {
    return {
      localizationLanguage: "en",
      currentTheme: "Default",
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";
.column {
  display: inline-block;
}

.column.content{
  min-width: 500px;
}


.k-item.k-menu-item.k-drawer-item.k-state-selected {
  color: #ffffff;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 220px 1fr;
}

.k-drawer-container.k-drawer-push {
  display: inherit;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
