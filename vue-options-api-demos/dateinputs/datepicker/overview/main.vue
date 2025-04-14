<template>
<div >
    <localization :language="selectedLocale.language">
        <intl :locale="selectedLocale.locale">
            <div class="example-wrapper row">
                <div class="col-xs-12 col-md-12 example-config">
                    <h6>Locale:  <dropdownlist
                        :style="{ width: '230px' }"
                        :value="selectedLocale"
                        :data-items="locales"
                        :text-field="'locale'"
                        @change="change" />
                    </h6>
                </div>
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Default Show</p>
                    <datepicker :style="{ width: '230px' }" :default-value="new Date()" :default-Show="true" >
                    </datepicker>
                    <p>Format and WeekColumn</p>
                    <datepicker :style="{ width: '230px' }" 
                        :default-value="new Date()"
                        :format="'dd/MMM/yyyy'" :week-number="true" >
                    </datepicker>
                    <p>Disabled</p>
                    <datepicker :style="{ width: '230px' }" :disabled="true" :default-value="new Date()"
                     :format="'dd/MMMM/yyyy'" >
                    </datepicker>
                </div>
            </div>
        </intl>
    </localization>
</div>
</template>
<script>
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
    weekData, numbers,
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
export default {
    components: {
      'datepicker': DatePicker,
      'dropdownlist': DropDownList,
      'intl': IntlProvider,
      'localization': LocalizationProvider
    },
    data: function() {
        return {
            locales: locales,
            selectedLocale: locales[0], 
            value: new Date()
        };
    },
    methods: {
      change(e) {
          this.selectedLocale= e.target.value;
      }
    }
};

</script>
