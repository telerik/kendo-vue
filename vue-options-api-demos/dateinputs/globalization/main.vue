<template>
	<localization :language="selectedLocale.language">
		<intl :locale="selectedLocale.locale">
			<div class="example-wrapper row">
				<div class="col-xs-12 col-md-12 example-config">
					<h6>Locale:
						 <dropdownlist
                             :style="{ width: '230px' }" :value="selectedLocale" :data-items="locales" :text-field="'locale'"
							@change="change" />
					</h6>
				</div>
				<div class="col-xs-12 col-md-6 example-col">
					<p>Calendar</p>
					<calendar :default-value="new Date()">
					</calendar>
				</div>
				<div class="col-xs-12 col-md-6 example-col">
					<p>DateInput</p>
					<dateinput :style="{ width: '230px' }" :default-value="new Date()" :format="'dd/MMM/yyyy'">
					</dateinput>
					<p>DatePicker</p>
					<datepicker :style="{ width: '230px' }" :default-value="new Date()" :format="'dd/MMM/yyyy'">
					</datepicker>
					<p>TimePicker</p>
					<timepicker :style="{ width: '230px' }" />
					<p>DateTimePicker</p>
					<datetimepicker :style="{ width: '230px' }" />
				</div>
			</div>
		</intl>
	</localization>
</template>
<script>
	import { Calendar, DateInput, DatePicker, TimePicker, DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { IntlProvider, load, loadMessages, LocalizationProvider } 
    from '@progress/kendo-vue-intl';

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
      'datetimepicker': DateTimePicker,
      'timepicker': TimePicker,
      'calendar': Calendar,
      'dateinput': DateInput,
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
