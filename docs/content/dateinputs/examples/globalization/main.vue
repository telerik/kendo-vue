<template>
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
            <p>Calendar</p>
            <Calendar :default-value="new Date()" />
          </div>
          <div class="col-xs-12 col-md-6 example-col">
            <p>DateInput</p>
            <DateInput
              :style="{ width: '230px' }"
              :default-value="new Date()"
              :format="'dd/MMM/yyyy'"
            />
            <p>DatePicker</p>
            <DatePicker
              :style="{ width: '230px' }"
              :default-value="new Date()"
              :format="'dd/MMM/yyyy'"
            />
            <p>TimePicker</p>
            <TimePicker :style="{ width: '230px' }" />
            <p>DateTimePicker</p>
            <DateTimePicker :style="{ width: '230px' }" />
          </div>
        </div>
      </IntlProvider>
    </LocalizationProvider>
  </template>

<script setup>
import { ref } from 'vue';
import { Calendar, DateInput, DatePicker, TimePicker, DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
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
