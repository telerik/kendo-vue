<template>
    <div>
      <LocalizationProvider :language="selectedLocale.language">
        <IntlProvider :locale="selectedLocale.locale">
          <div class="example-wrapper row">
            <div class="col-xs-12 col-md-12 example-config">
              <h6>Locale:
                <DropDownList
                  :style="{ width: '230px' }"
                  :value="selectedLocale"
                  :data-items="locales"
                  :text-field="'locale'"
                  @change="change"
                />
              </h6>
            </div>
            <div class="col-xs-12 col-md-6 example-col">
              <p>Default Show</p>
              <DatePicker
                :style="{ width: '230px' }"
                :default-value="new Date()"
                :default-Show="true"
              />
              <p>Format and WeekColumn</p>
              <DatePicker
                :style="{ width: '230px' }"
                :default-value="new Date()"
                :format="'dd/MMM/yyyy'"
                :week-number="true"
              />
              <p>Disabled</p>
              <DatePicker
                :style="{ width: '230px' }"
                :disabled="true"
                :default-value="new Date()"
                :format="'dd/MMMM/yyyy'"
              />
            </div>
          </div>
        </IntlProvider>
      </LocalizationProvider>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { IntlProvider, load, loadMessages, LocalizationProvider } from '@progress/kendo-vue-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(
    likelySubtags,
    currencyData,
    weekData,
    numbers,
    caGregorian,
    dateFields,
    timeZoneNames
);

import esMessages from './es.json';
loadMessages(esMessages, 'es-ES');

const locales = [
    {
        language: 'en-US',
        locale: 'en'
    },
    {
        language: 'es-ES',
        locale: 'es'
    }
];

const selectedLocale = ref(locales[0]);

const change = (e) => {
    selectedLocale.value = e.target.value;
};
</script>
