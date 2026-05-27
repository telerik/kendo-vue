<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :filter-cell-render="filterRender"
  >
    <template #filterSlotTemplate>
      <div>
        Filter Slot:
        <KInput
          :style="{ width: '180px' }"
          :value="inputValue"
          @input="onInput"
        />
        <KButton :style="{ 'margin-left': '15px' }" @click="onReset">Clear</KButton>
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const filter = ref({
    logic: 'and',
    filters: [],
});

const columns = [
    { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
    { field: 'ProductName', title: 'Product Name' },
    {
        field: 'UnitsInStock',
        filterCell: 'filterSlotTemplate',
        width: '350px',
        title: 'UnitsInStock',
    },
    { field: 'UnitPrice', filter: 'numeric', title: 'UnitPrice' },
    { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
];

const inputValue = ref(null);

const products = computed(() => filterBy(sampleProducts, filter.value));

function filterChange(ev) {
    filter.value = ev.filter;
}

function filterRender(h, defaultRendering) {
    return defaultRendering;
}

function onReset() {
    inputValue.value = '';
    filter.value = {
        logic: 'and',
        filters: [],
    };
}

function onInput(ev) {
    inputValue.value = ev.target.value;

    if (inputValue.value.length === 0) {
        setTimeout(() => {
            filter.value = {
                logic: 'and',
                filters: [],
            };
        });
    }
    let newFilter = [...filter.value.filters].filter(
        (filter) => filter.field !== 'UnitsInStock'
    );

    const commaSeparatedValues = ev.target.value.split(',');

    const equalFilters = [];
    const rangeFilters = [];
    commaSeparatedValues.forEach((ev) => {
        if (Number(ev)) {
            equalFilters.push({
                field: 'UnitsInStock',
                operator: 'eq',
                value: ev,
            });
        } else {
            const rangeValues = ev.split('-');

            if (rangeValues[0] !== '') {
                rangeFilters.push({
                    field: 'UnitsInStock',
                    operator: 'gte',
                    value: Number(rangeValues[0]),
                });
                rangeFilters.push({
                    field: 'UnitsInStock',
                    operator: 'lte',
                    value: Number(rangeValues[1]),
                });
            }
        }
    });

    const newFilterDefinitions = [];
    if (rangeFilters.length !== 0) {
        newFilterDefinitions.push({
            logic: 'and',
            filters: [...rangeFilters],
        });
    }

    if (equalFilters.length !== 0) {
        newFilterDefinitions.push(...equalFilters);
    }

    newFilter.push({
        field: 'UnitsInStock',
        logic: 'or',
        filters: newFilterDefinitions,
    });

    filter.value.filters = newFilter;
}
</script>
