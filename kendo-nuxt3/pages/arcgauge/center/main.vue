<template>
  <div>
    <div class="example-config">
      <label>Current locale: </label>
      <DropDownList
        :style="{
          'margin-left': 5,
        }"
        :value="locale"
        @change="onChange"
        :data-items="locales"
      />
    </div>
    <intl :locale="locale">
      <div class="row" ref="locale" >
        
        <div class="col-sm-12 col-md-2">
          <LinearGauge :pointer="pointer" :scale="scale" :ref="locale"  />
        </div>
        <div class="col-sm-12 col-md-5">
          <RadialGauge :pointer="pointer" :scale="scale" />
        </div>
        <div class="col-sm-12 col-md-5">
          <ArcGauge :value="value" :scale="arcScale" />
        </div>
        <calendar :default-value="new Date()">
					</calendar>
      </div>
    </intl>
  </div>
</template>

<script lang="ts">
import { ArcGauge, LinearGauge, RadialGauge } from '@progress/kendo-vue-gauges';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { IntlProvider } from '@progress/kendo-vue-intl';

import { load } from '@progress/kendo-vue-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import bgNumbers from 'cldr-numbers-full/main/bg/numbers.json';
import bgCurrencies from 'cldr-numbers-full/main/bg/currencies.json';
import bgCaGregorian from 'cldr-dates-full/main/bg/ca-gregorian.json';
import bgDataFields from 'cldr-dates-full/main/bg/dateFields.json';
import bgTimeZoneNames from 'cldr-dates-full/main/bg/timeZoneNames.json';
import { Calendar } from '@progress/kendo-vue-dateinputs';

load(
  likelySubtags,
  currencyData,
  weekData,
  bgNumbers,
  bgCurrencies,
  bgCaGregorian,
  bgDataFields,
  bgTimeZoneNames
);

export default {
  components: {
    ArcGauge,
    LinearGauge,
    RadialGauge,
    DropDownList,
    intl: IntlProvider,
    calendar: Calendar
  },
  data() {
    return {
      locale: 'bg-BG',
      locales: ['bg-BG', 'en-US'],
      value: 30,
      pointer: {
        value: 30,
      },
      scale: {
        labels: {
          format: 'c',
        },
      },
      arcScale: {
        labels: {
          format: 'c',
          visible: true,
        },
        majorTicks: {
          visible: true,
        },
        minorTicks: {
          visible: true,
        },
      },
    };
  },
  methods: {
    onChange(e) {
      this.locale = e.target.value;

    },
  },
};
</script>
