<template>
    <localization :language="spanish ? 'es-ES' : 'en-EN'">
      <intl :locale="spanish ? 'es' : 'en'">
        <div class="col-xs-12 col-md-12 example-config">
          <kbutton @click="buttonClick">
            Change to {{ spanish ? 'English' : 'Spanish' }}
          </kbutton>
        </div>
        <grid
          :style="{ height: '420px' }"
          :data-items="dataResult"
          :sortable="true"
          :groupable="true"
          :filterable="true"
          :pageable="{ pageSizes: [5, 7, 10] }"
          :skip="skip"
          :take="take"
          :columns="columns"
          @datastatechange="dataStateChange"
        >
        </grid>
      </intl>
    </localization>
  </template>
  <script>
  import { Grid } from '@progress/kendo-vue-grid';
  import { Button } from '@progress/kendo-vue-buttons';
  import {
    IntlProvider,
    load,
    LocalizationProvider,
    loadMessages,
  } from '@progress/kendo-vue-intl';
  
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
  
  const esMessages = {
    datepicker: {
      toggleCalendar: 'Alternar calendario',
    },
    calendar: {
      today: 'Hoy',
    },
    dateinput: {
      increment: 'Incrementar valor',
      decrement: 'Disminuir valor',
    },
    numerictextbox: {
      increment: 'Incrementar valor',
      decrement: 'Disminuir valor',
    },
    grid: {
      groupPanelEmpty:
        'Arrastre el título de una columna y suéltelo aquí para agrupar por ese criterio',
      noRecords: 'No hay datos disponibles.',
      pagerFirstPage: 'Ir a la primera página',
      pagerPreviousPage: 'Ir a la página anterior',
      pagerNextPage: 'Ir a la página siguiente',
      pagerLastPage: 'Ir a la última página',
      pagerPage: 'Página',
      pagerOf: 'de',
      pagerItems: 'ítems',
      pagerInfo: '{0} - {1} de {2} ítems',
      pagerItemsPerPage: 'ítems por página',
      filterEqOperator: 'Es igual a',
      filterNotEqOperator: 'No es igual a',
      filterIsNullOperator: 'Es nulo',
      filterIsNotNullOperator: 'No es nulo',
      filterIsEmptyOperator: 'Está vacío',
      filterIsNotEmptyOperator: 'No está vacío',
      filterStartsWithOperator: 'Comienza con',
      filterContainsOperator: 'Contiene',
      filterNotContainsOperator: 'No contiene',
      filterEndsWithOperator: 'Termina en',
      filterGteOperator: 'Es mayor o igual que',
      filterGtOperator: 'Es mayor que',
      filterLteOperator: 'Es menor o igual que',
      filterLtOperator: 'Es menor o igual que',
      filterIsTrue: 'Sí',
      filterIsFalse: 'No',
      filterBooleanAll: '(Todas)',
      filterAfterOrEqualOperator: 'Es posterior o igual a',
      filterAfterOperator: 'Es posterior',
      filterBeforeOperator: 'Es anterior',
      filterBeforeOrEqualOperator: 'Es anterior o igual a',
      filterFilterButton: 'Filtrar',
      filterClearButton: 'Limpiar filtros',
      filterAndLogic: 'Y',
      filterOrLogic: 'O',
    },
  };
  loadMessages(esMessages, 'es-ES');
  export default {
    components: {
      Grid: Grid,
      localization: LocalizationProvider,
      intl: IntlProvider,
      kbutton: Button,
    },
    data: function () {
      return {
        spanish: true,
        skip: 0,
        take: 7,
        dataResult: [],
      };
    },
    computed: {
      columns() {
        return [
          { field: 'ProductID', title: 'ID', width: '70px', filterable: false },
          { field: 'ProductName', title: this.productNameHeader },
          {
            field: 'FirstOrderedOn',
            title: this.orderDateHeader,
            filter: 'date',
            format: '{0:D}',
          },
          {
            field: 'UnitPrice',
            title: this.unitPriceHeader,
            filter: 'numeric',
            format: '{0:c}',
          },
        ];
      },
      productNameHeader() {
        return this.spanish ? 'Nombre del producto' : 'Product Name';
      },
      orderDateHeader() {
        return this.spanish ? 'Primero ordenado en' : 'First Ordered On';
      },
      unitPriceHeader() {
        return this.spanish ? 'Precio unitario' : 'Unit Price';
      },
    },
    methods: {
      buttonClick: function () {
        this.spanish = !this.spanish;
      },
      dataStateChange: function (event) {
        this.take = event.data.take;
        this.skip = event.data.skip;
      },
    },
  };
  </script>
  