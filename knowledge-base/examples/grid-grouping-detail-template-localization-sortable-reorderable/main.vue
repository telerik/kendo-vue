<template>
    <localization :language="currentLocale.language">
        <intl :locale="currentLocale.locale">
            <div>
                <pdfexport ref="gridPdfExport">
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
                        <template v-slot:myTemplate="{ props }">
                            <custom :data-item="props.dataItem" />
                        </template>
                        <toolbar>
                            Locale:&nbsp;&nbsp;&nbsp;
                            <dropdownlist
                                :value="currentLocale"
                                :text-field="'language'"
                                @change="dropDownChange"
                                :data-items="locales"
                            ></dropdownlist>&nbsp;&nbsp;&nbsp;
                            <kbutton
                                title="Export to Excel"
                                :theme-color="'primary'"
                                @click="exportExcel"
                            >Export to Excel</kbutton>&nbsp;
                            <kbutton :theme-color="'primary'" @click="exportPDF">Export to PDF</kbutton>
                        </toolbar>
                    </Grid>
                </pdfexport>
            </div>
        </intl>
    </localization>
</template>
<script>
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import {
    IntlProvider,
    load,
    LocalizationProvider,
    loadMessages,
    IntlService,
} from '@progress/kendo-vue-intl';
import DetailComponent from './DetailComponent';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

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

import esMessages from './es.json';
loadMessages(esMessages, 'es-ES');

import { process } from '@progress/kendo-data-query';
import orders from './orders.json';

const DATE_FORMAT = 'yyyy-mm-dd hh:mm:ss.SSS';
const intl = new IntlService();

orders.forEach((o) => {
    o.orderDate = intl.parseDate(o.orderDate, DATE_FORMAT);
    o.shippedDate =
        o.shippedDate === 'NULL'
            ? undefined
            : intl.parseDate(o.shippedDate, DATE_FORMAT);
});

export default {
    components: {
        Grid: Grid,
        pdfexport: GridPdfExport,
        toolbar: GridToolbar,
        dropdownlist: DropDownList,
        intl: IntlProvider,
        localization: LocalizationProvider,
        custom: DetailComponent,
        kbutton: Button,
    },
    data: function () {
        return {
            skip: 0,
            take: 20,
            sort: [{ field: 'orderDate', dir: 'desc' }],
            group: [{ field: 'customerID' }],
            filter: null,
            dataResult: [],
            locales: [
                {
                    language: 'en-US',
                    locale: 'en',
                },
                {
                    language: 'es-ES',
                    locale: 'es',
                },
            ],
            currentLocale: null,
            sortable: true,
            filterable: true,
            groupable: true,
            reorderable: true,
            detailComponent: 'myTemplate',
            columns: [
                { field: 'customerID', width: '200px' },
                { field: 'orderDate', filter: 'date', format: '{0:D}', width: '300px' },
                { field: 'shipName', width: '280px' },
                { field: 'freight', filter: 'numeric', width: '200px' },
                {
                    field: 'shippedDate',
                    filter: 'date',
                    format: '{0:D}',
                    width: '300px',
                },
                { field: 'employeeID', filter: 'numeric', width: '200px' },
                {
                    field: 'orderID',
                    filterable: 'false',
                    title: 'ID',
                    width: '90px',
                    locked: 'true',
                },
            ],
        };
    },
    created() {
        this.currentLocale = this.locales[0];
        const dataState = {
            skip: this.skip,
            take: this.take,
            sort: this.sort,
            group: this.group,
        };

        this.dataResult = process(orders, dataState);
    },
    methods: {
        createAppState: function (dataState) {
            this.take = dataState.take;
            this.skip = dataState.skip;
            if (dataState.group) {
                dataState.group.map((group) => (group.aggregates = this.aggregates));
            }
            this.group = dataState.group;
            this.filter = dataState.filter;
            this.sort = dataState.sort;
        },
        dataStateChange(event) {
            this.createAppState(event.data);
            this.dataResult = process(orders, {
                skip: this.skip,
                take: this.take,
                sort: this.sort,
                filter: this.filter,
                group: this.group,
            });
        },
        expandChange(event) {
            const isExpanded =
                event.dataItem.expanded === undefined
                    ? event.dataItem.aggregates
                    : event.dataItem.expanded;
            event.dataItem.expanded = !isExpanded;
        },
        exportExcel() {
            saveExcel({
                data: orders,
                fileName: 'myFile',
                columns: this.columns,
            });
        },
        exportPDF() {
            const tempSort = this.sort;
            this.sort = null;
            this.$nextTick(() => {
                this.$refs.gridPdfExport.save(
                    process(orders, { skip: this.skip, take: this.take })
                );
                this.sort = tempSort;
            });
        },
        pageChangeHandler: function (event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },
        columnReorder: function (options) {
            this.columns = options.columns;
        },
        dropDownChange: function (e) {
            this.currentLocale = e.target.value;
        },
    },
};
</script>
