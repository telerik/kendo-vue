<template>
  <LocalizationProvider :language="spanish ? 'es-ES' : 'en-EN'">
    <IntlProvider :locale="spanish ? 'es' : 'en'">
      <div class="col-xs-12 col-md-12 example-config">
        <KButton @click="buttonClick">
          Change to {{ spanish ? 'English' : 'Spanish' }}
        </KButton>
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
      />
    </IntlProvider>
  </LocalizationProvider>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { LocalizationProvider, IntlProvider, loadMessages, load } from '@progress/kendo-vue-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import currencies from 'cldr-numbers-full/main/es/currencies.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(likelySubtags, currencyData, weekData, numbers, currencies, caGregorian, dateFields, timeZoneNames);

const esMessages = {
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

// State management
const spanish = ref(true);
const skip = ref(0);
const take = ref(7);
const dataResult = ref([]);

const columns = computed(() => [
    { field: 'ProductID', title: 'ID', width: '70px', filterable: false },
    { field: 'ProductName', title: productNameHeader.value },
    {
        field: 'FirstOrderedOn',
        title: orderDateHeader.value,
        filter: 'date',
        format: '{0:D}',
    },
    {
        field: 'UnitPrice',
        title: unitPriceHeader.value,
        filter: 'numeric',
        format: '{0:c}',
    },
]);

const productNameHeader = computed(() => (spanish.value ? 'Nombre del producto' : 'Product Name'));
const orderDateHeader = computed(() => (spanish.value ? 'Primero ordenado en' : 'First Ordered On'));
const unitPriceHeader = computed(() => (spanish.value ? 'Precio unitario' : 'Unit Price'));

const buttonClick = () => {
    spanish.value = !spanish.value;
};

const dataStateChange = (event) => {
    take.value = event.data.take;
    skip.value = event.data.skip;
};
</script>
