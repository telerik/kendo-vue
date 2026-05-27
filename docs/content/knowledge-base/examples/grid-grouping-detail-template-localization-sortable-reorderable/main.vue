<template>
    <LocalizationProvider :language="currentLocale.language">
      <IntlProvider :locale="currentLocale.locale">
        <div>
          <GridPdfExport ref="gridPdfExport">
            <Grid
              :style="{ height: '700px' }"
              :sortable="sortable"
              :filterable="filterable"
              :groupable="groupable"
              :reorderable="reorderable"
              :pageable="{ buttonCount: 4, pageSizes: true }"
              :data-items="dataResult"
              :skip="skip"
              :take="take"
              :sort="sort"
              :group="group"
              :filter="filter"
              :columns="columns"
              @datastatechange="dataStateChange"
              :detail="detailComponent"
              :expand-field="'expanded'"
              @expandchange="expandChange"
              @columnreorder="columnReorder"
            >
              <template #myTemplate="{ props }">
                <DetailComponent :data-item="props.dataItem" />
              </template>
              <GridToolbar>
                Locale:&nbsp;&nbsp;&nbsp;
                <dropdownlist
                  :value="currentLocale"
                  :text-field="'language'"
                  @change="dropDownChange"
                  :data-items="locales"
                />
                &nbsp;&nbsp;&nbsp;
                <KButton title="Export to Excel" :theme-color="'primary'" @click="exportExcel">
                  Export to Excel
                </KButton>
                &nbsp;
                <KButton :theme-color="'primary'" @click="exportPDF">Export to PDF</KButton>
              </GridToolbar>
            </Grid>
          </GridPdfExport>
        </div>
      </IntlProvider>
    </LocalizationProvider>
  </template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { DropDownList as dropdownlist } from '@progress/kendo-vue-dropdowns';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import {
    IntlProvider,
    load,
    LocalizationProvider,
    loadMessages,
    IntlService,
} from '@progress/kendo-vue-intl';

import DetailComponent from './DetailComponent.vue';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

import esMessages from './es.json';
import { process } from '@progress/kendo-data-query';
import ordersData from './orders.json';

load(
    likelySubtags,
    currencyData,
    weekData,
    numbers,
    currencies,
    caGregorian,
    dateFields,
    timeZoneNames
);
loadMessages(esMessages, 'es-ES');

const gridPdfExport = ref(null);

const DATE_FORMAT = 'yyyy-mm-dd hh:mm:ss.SSS';
const intlService = new IntlService();

// Parse dates
const orders = ordersData.map(o => ({
    ...o,
    orderDate: intlService.parseDate(o.orderDate, DATE_FORMAT),
    shippedDate: o.shippedDate === 'NULL' ? undefined : intlService.parseDate(o.shippedDate, DATE_FORMAT)
}));

const skip = ref(0);
const take = ref(20);
const sort = ref([{ field: 'orderDate', dir: 'desc' }]);
const group = ref([{ field: 'customerID' }]);
const filter = ref(null);

const locales = [
    { language: 'en-US', locale: 'en' },
    { language: 'es-ES', locale: 'es' }
];
const currentLocale = ref(locales[0]);

const sortable = true;
const filterable = true;
const groupable = true;
const reorderable = true;

const columns = ref([
    { field: 'customerID', width: '200px' },
    { field: 'orderDate', filter: 'date', format: '{0:D}', width: '300px' },
    { field: 'shipName', width: '280px' },
    { field: 'freight', filter: 'numeric', width: '200px' },
    { field: 'shippedDate', filter: 'date', format: '{0:D}', width: '300px' },
    { field: 'employeeID', filter: 'numeric', width: '200px' },
    { field: 'orderID', filterable: 'false', title: 'ID', width: '90px', locked: 'true' }
]);

const dataResult = ref([]);

const detailComponent = 'myTemplate';

const createAppState = (dataState) => {
    take.value = dataState.take;
    skip.value = dataState.skip;

    if (dataState.group) {
        dataState.group.map(group => group.aggregates = []);
    }

    group.value = dataState.group;
    filter.value = dataState.filter;
    sort.value = dataState.sort;
};

const dataStateChange = (event) => {
    createAppState(event.data);
    dataResult.value = process(orders, {
        skip: skip.value,
        take: take.value,
        sort: sort.value,
        filter: filter.value,
        group: group.value
    });
};

const expandChange = (event) => {
    const isExpanded = event.dataItem.expanded === undefined
        ? event.dataItem.aggregates
        : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;
};

const exportExcel = () => {
    saveExcel({
        data: orders,
        fileName: 'myFile',
        columns: columns.value
    });
};

const exportPDF = () => {
    const tempSort = sort.value;
    sort.value = null;
    nextTick(() => {
        gridPdfExport.value.save(process(orders, { skip: skip.value, take: take.value }));
        sort.value = tempSort;
    });
};

const columnReorder = (options) => {
    columns.value = options.columns;
};

const dropDownChange = (e) => {
    currentLocale.value = e.target.value;
};

onMounted(() => {
    const initialState = {
        skip: skip.value,
        take: take.value,
        sort: sort.value,
        group: group.value
    };
    dataResult.value = process(orders, initialState);
});
</script>
