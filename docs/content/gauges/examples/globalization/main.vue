<template>
    <div>
        <div class="example-config">
            <label>Current locale: </label>
            <DropDownList
                :style="{ width: '230px', 'margin-left': '5px' }"
                :value="locale"
                @change="onChange"
                :data-items="locales"
            />
        </div>
        <IntlProvider :locale="locale">
            <div class="row" :key="locale">
                <div class="col-sm-12 col-md-2">
                    <LinearGauge :pointer="pointer" :scale="scale" />
                </div>
                <div class="col-sm-12 col-md-5">
                    <RadialGauge :pointer="pointer" :scale="scale" />
                </div>
                <div class="col-sm-12 col-md-5">
                    <ArcGauge :value="value" :scale="arcScale" />
                </div>
            </div>
        </IntlProvider>
    </div>
</template>

<script setup>
import { ref } from 'vue';
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

load(likelySubtags, currencyData, weekData, bgNumbers, bgCurrencies, bgCaGregorian, bgDataFields, bgTimeZoneNames);

const locale = ref('en-US');
const locales = ref(['bg-BG', 'en-US']);
const value = ref(30);

const pointer = ref({
    value: 30,
});

const scale = ref({
    labels: {
        format: 'c',
    },
});

const arcScale = ref({
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
});

function onChange(e) {
    locale.value = e.target.value;
}
</script>
