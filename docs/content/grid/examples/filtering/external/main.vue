<template>
  <div>
    <Filter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    />
    <Grid
      :data-items="products"
      :filterable="true"
      :filter="filter"
      @filterchange="onFilterChange"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Filter, Operators } from '@progress/kendo-vue-data-tools';
import { filterBy } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import { sampleProducts } from './products';

const currentDate = new Date();

const defaultGroupFilter = ref({
    logic: 'and',
    filters: [],
});

const filter = ref({
    logic: 'and',
    filters: [
        { field: 'ProductName', operator: 'contains', value: 'an' },
        { field: 'UnitPrice', operator: 'neq', value: 22 },
        {
            logic: 'or',
            filters: [
                { field: 'ProductName', operator: 'startswith', value: 'c' },
                { field: 'UnitPrice', operator: 'eq', value: 19 },
            ],
        },
        { field: 'FirstOrderedOn', operator: 'lte', value: currentDate },
        { field: 'Discontinued', operator: 'eq', value: true },
    ],
});

const fields = ref([
    {
        name: 'ProductName',
        label: 'Product Name',
        filter: 'text',
        operators: Operators.text,
    },
    {
        name: 'UnitPrice',
        label: 'Unit Price',
        filter: 'numeric',
        operators: Operators.numeric,
    },
    {
        name: 'FirstOrderedOn',
        label: 'First Ordered On',
        filter: 'date',
        operators: Operators.date,
    },
    {
        name: 'Discontinued',
        label: 'Discontinued',
        filter: 'boolean',
        operators: Operators.boolean,
    },
]);

const columns = ref([
    {
        field: 'ProductID',
        filterable: false,
        title: 'Product ID',
        width: '50px',
    },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
]);

const products = computed(() => filterBy(sampleProducts, filter.value));

function onFilterChange(event) {
    if (event.filter !== null) {
        filter.value = event.filter;
    } else {
        filter.value = defaultGroupFilter.value;
    }
}
</script>
