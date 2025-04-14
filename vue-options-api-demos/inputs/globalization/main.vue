<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-sm-6 example-col">
      <localization :language="'en'">
        <intl :locale="'en'">
          <p>NumericTextBox</p>
          <numerictextbox
            :style="{ width: '230px' }"
            :default-value="123.45"
            :format="'c2'"
          >
          </numerictextbox>
          <p>Slider</p>
          <slider
            :buttons="true"
            :step="1"
            :default-value="7"
            :min="1"
            :max="10"
          >
          </slider>
        </intl>
      </localization>
    </div>
  </div>
</template>
<script>
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

export default {
  components: {
    numerictextbox: NumericTextBox,
    slider: Slider,
    intl: IntlProvider,
    localization: LocalizationProvider,
  },
};
</script>
