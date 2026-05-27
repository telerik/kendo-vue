<template>
  <Grid
    :data-items="result"
    :take="dataState.take"
    :skip="dataState.skip"
    :sort="dataState.sort"
    :filter="dataState.filter"
    @datastatechange="dataStateChange"
    :columns="columns"
    :sortable="true"
    :pageable="true"
    :page-size="8"
  >
    <template #myTemplate="{ props }">
      <ColumnMenu
        :column="props.column"
        :filterable="props.filterable"
        :filter="props.filter"
        :sortable="props.sortable"
        :sort="props.sort"
        :columns="columns"
        @sortchange="(e) => props.onSortchange(e)"
        @filterchange="(e) => props.onFilterchange(e)"
        @closemenu="(e) => props.onClosemenu(e)"
        @contentfocus="(e) => props.onContentfocus(e)"
        @columnssubmit="onColumnsSubmit"
      />
    </template>
  </Grid>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid, filterGroupByField } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import ColumnMenu from './ColumnMenu.vue';
import { products } from './products';

const result = ref([]);
const dataState = ref({
    take: 8,
    skip: 0,
});
const columns = ref([
    {
        title: 'Product Id',
        field: 'ProductID',
        filter: 'numeric',
        columnMenu: 'myTemplate',
        headerClassName: 'customMenu',
    },
    {
        title: 'Product Name',
        field: 'ProductName',
        filter: 'text',
        columnMenu: 'myTemplate',
        headerClassName: 'customMenu',
    },
    {
        title: 'Quantity Per Unit',
        field: 'QuantityPerUnit',
        filter: 'text',
        columnMenu: 'myTemplate',
        headerClassName: 'customMenu',
    },
    {
        title: 'Unit Price',
        field: 'UnitPrice',
        filter: 'numeric',
        columnMenu: 'myTemplate',
        headerClassName: 'customMenu',
    },
    {
        title: 'Units In Stock',
        field: 'UnitsInStock',
        filter: 'numeric',
        columnMenu: 'myTemplate',
        headerClassName: 'customMenu',
    },
    {
        title: 'Discontinued',
        field: 'Discontinued',
        filter: 'boolean',
        columnMenu: 'myTemplate',
        headerClassName: 'customMenu',
    },
]);

const createDataState = (state) => {
    result.value = process(products.slice(0), state);
    dataState.value = state;
};

const dataStateChange = (e) => {
    if (e.event) {
        const isColumnActive = filterGroupByField(e.event.field, e.data.filter);
        const changedColumn = columns.value.find(
            (column) => column.field === e.event.field
        );

        if (changedColumn) {
            changedColumn.headerClassName = isColumnActive
                ? 'customMenu active'
                : '';
        }
    }
    createDataState(e.data);
};

const onColumnsSubmit = (columnsState) => {
    columns.value = columnsState;
};

onMounted(() => {
    createDataState({
        take: 8,
        skip: 0,
    });
});
</script>

<style>
th.k-header.customMenu > div > div > span.k-i-more-vertical::before,
th.k-header.customMenu.active > div > div > span.k-i-more-vertical::before {
  content: '\e129';
}

.k-columnmenu-item {
  display: none;
}

th.k-header.active > div > a {
  color: #fff;
  background-color: #ff6358;
}
</style>
