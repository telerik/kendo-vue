<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-sm-6 example-col">
      <LocalizationProvider :language="'en'">
        <IntlProvider :locale="'en'">
          <p>NumericTextBox</p>
          <NumericTextBox
            :style="{ width: '230px' }"
            :default-value="123.45"
            :format="'c2'"
          />
          <p>Slider</p>
          <Slider
            :buttons="true"
            :step="1"
            :default-value="7"
            :min="1"
            :max="10"
          />
        </IntlProvider>
      </LocalizationProvider>
    </div>
  </div>
</template>

<script setup>
import {
    IntlProvider,
    load,
    loadMessages,
    LocalizationProvider,
} from "@progress/kendo-vue-intl";
import { NumericTextBox, Slider } from "@progress/kendo-vue-inputs";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import esNumbers from "cldr-numbers-full/main/es/numbers.json";
import esCurrencies from "cldr-numbers-full/main/es/currencies.json";

load(likelySubtags, currencyData, esNumbers, esCurrencies);

import esMessages from "./es.json";
loadMessages(esMessages, "es");
</script>
