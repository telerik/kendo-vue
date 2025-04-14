<template>
  <div :class="'example-config'">
    <KButton class="buttons" @click="saveState">Save Grid State</KButton>
    <KButton class="buttons" @click="getState">Reload Grid State</KButton>
  </div>
  <localization :language="currentLocale.language">
    <intl :locale="currentLocale.locale">
      <div>
        <Grid
          :style="{ height: '700px' }"
          :sortable="sortable"
          :filterable="filterable"
          :groupable="groupable"
          :reorderable="reorderable"
          :resizable="resizable"
          :pageable="{ buttonCount: 4, pageSizes: true }"
          :data-items="dataResult"
          :skip="skip"
          :take="take"
          :sort="sort"
          :group="group"
          :filter="filter"
          :columns="columns"
          :detail="detailComponent"
          :expand-field="'expanded'"
          @datastatechange="dataStateChange"
          @expandchange="expandChange"
          @columnreorder="columnReorder"
          @columnresize="columnResize"
        >
          <template v-slot:myTemplate="{ props }">
            <DetailComponent :data-item="props.dataItem" />
          </template>
          <template v-slot:myColumnMenuTemplate="{ props }">
            <div>
              <ColumnMenu
                :column="props.column"
                :filterable="props.filterable"
                :filter="props.filter"
                :sortable="props.sortable"
                :sort="props.sort"
                :columns="columns"
                :locked="isColumnLocked(props.column.field)"
                @sortchange="(e) => props.onSortchange(e)"
                @lockchange="(e) => lockChange(e, props.column)"
                @visibilitychange="(e) => visibilityChange(e, props.column)"
                @filterchange="(e) => props.onFilterchange(e)"
                @closemenu="(e) => props.onClosemenu(e)"
                @contentfocus="(e) => props.onContentfocus(e)"
                @columnssubmit="onColumnsSubmit"
              />
            </div>
          </template>
          <GridToolbar>
            <div
              :style="{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }"
            >
              <span>
                Locale:
                <DropDownList
                  :value="currentLocale"
                  :text-field="'language'"
                  @change="dropDownChange"
                  :data-items="locales"
                >
                </DropDownList>
              </span>
            </div>
          </GridToolbar>
        </Grid>
      </div>
    </intl>
  </localization>
</template>
<script>
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';
import ColumnMenu from './ColumnMenu.vue';

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
import orders_plain from './orders.json';

const DATE_FORMAT = 'yyyy-mm-dd hh:mm:ss.SSS';
const intl = new IntlService();

function formatDates(items, noFormat) {
  items.forEach((o) => {
    o.orderDate = intl.parseDate(
      o.orderDate,
      noFormat ? DATE_FORMAT : undefined
    );
    o.shippedDate =
      o.shippedDate === 'NULL'
        ? undefined
        : intl.parseDate(o.shippedDate, noFormat ? DATE_FORMAT : undefined);
  });
  return items;
}

const orders = formatDates(orders_plain, true);

export default {
  components: {
    Grid,
    GridToolbar,
    DropDownList,
    intl: IntlProvider,
    localization: LocalizationProvider,
    DetailComponent,
    KButton: Button,
    ColumnMenu,
  },
  data: function () {
    return {
      ordersCopy: orders,
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
      resizable: true,
      detailComponent: 'myTemplate',
      restoredData: null,
      columns: [
        {
          field: 'customerID',
          width: '200px',
          columnMenu: 'myColumnMenuTemplate',
        },
        {
          field: 'orderDate',
          filter: 'date',
          format: '{0:D}',
          width: '300px',
          columnMenu: 'myColumnMenuTemplate',
        },
        {
          field: 'shipName',
          width: '280px',
          columnMenu: 'myColumnMenuTemplate',
        },
        {
          field: 'freight',
          filter: 'numeric',
          width: '200px',
          columnMenu: 'myColumnMenuTemplate',
        },
        {
          field: 'shippedDate',
          filter: 'date',
          format: '{0:D}',
          width: '300px',
          columnMenu: 'myColumnMenuTemplate',
        },
        {
          field: 'employeeID',
          filter: 'numeric',
          width: '200px',
          columnMenu: 'myColumnMenuTemplate',
        },
        {
          field: 'orderID',
          filterable: 'false',
          title: 'ID',
          width: '90px',
          locked: 'true',
          columnMenu: 'myColumnMenuTemplate',
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
      filter: this.filter,
    };
    this.dataResult = process(orders, dataState);
  },
  methods: {
    isColumnLocked(columnName) {
      return this.columns.filter((ev) => ev.field === columnName)[0].locked;
    },
    lockChange(state, columnName) {
      const columnToLock = this.columns.filter(
        (ev) => ev.field === columnName.field
      )[0];
      columnToLock.locked = state;
    },
    visibilityChange(state, columnName) {
      this.columns.filter((ev) => ev.field === columnName.field)[0].hidden =
        state;
    },
    onColumnsSubmit(columnsState) {
      this.columns = columnsState;
    },
    saveState: function () {
      const gridState = {};
      gridState.data = [...this.ordersCopy];
      gridState.sortable = this.sortable;
      gridState.filterable = this.filterable;
      gridState.groupable = this.groupable;
      gridState.skip = this.skip;
      gridState.take = this.take;
      gridState.group = this.group;
      gridState.sort = this.sort;
      gridState.filter = this.filter;
      gridState.columns = this.columns;
      gridState.currentLocale = this.currentLocale;

      localStorage.setItem('gridState', JSON.stringify(gridState));
    },
    getState: function () {
      const gridState = JSON.parse(localStorage.getItem('gridState'));

      if (gridState !== null) {
        this.restoredData = formatDates(gridState.data);
        this.sortable = gridState.sortable;
        this.filterable = gridState.filterable;
        this.groupable = gridState.groupable;
        this.skip = gridState.skip;
        this.take = gridState.take;
        this.group = gridState.group;
        this.sort = gridState.sort;
        this.filter = gridState.filter;
        this.currentLocale = gridState.currentLocale;
        this.columns = gridState.columns;

        this.updateState();
      }
    },
    updateState() {
      this.dataResult = process(this.restoredData, {
        skip: this.skip,
        take: this.take,
        sort: this.sort,
        filter: this.filter,
        group: this.group,
      });
    },
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

      this.ordersCopy.find(
        (order) => order.orderID === event.dataItem.orderID
      ).expanded = !isExpanded;
    },
    pageChangeHandler: function (event) {
      this.skip = event.page.skip;
      this.take = event.page.take;
    },
    columnReorder: function (options) {
      this.columns = options.columns;
    },
    columnResize: function (options) {
      this.columns = options.columns;
    },
    dropDownChange: function (e) {
      this.currentLocale = e.target.value;
    },
  },
};
</script>
<style>
.buttons {
  margin-right: 10px;
}
</style>
