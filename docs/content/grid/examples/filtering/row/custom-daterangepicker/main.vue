<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :show-loader="showLoader"
  >
    <template #filterSlotTemplate>
      <div>
        <DateRangePicker @change="onDateRangePickerChange" />
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const showLoader = ref(false);
const filter = ref({
    logic: 'and',
    filters: [],
});

const products = computed(() => filterBy(sampleProducts, filter.value));

const columns = computed(() => [
    {
        field: 'ProductID',
        filterable: false,
        title: 'ID',
        width: '50px',
    },
    { field: 'ProductName', title: 'Product Name' },
    {
        field: 'FirstOrderedOn',
        title: 'First Ordered On',
        format: '{0:d}',
        filterCell: 'filterSlotTemplate',
    },
]);

function filterChange(ev) {
    showLoader.value = true;
    setTimeout(() => {
        filter.value = ev.filter;
        showLoader.value = false;
    }, 300);
}

function onDateRangePickerChange(e) {
    const currentFilters = filter.value.filters;

    const isDateRangeFilterApplied =
    currentFilters.filter((el) => el.customOperator).length !== 0;

    if (isDateRangeFilterApplied) {
        const index = currentFilters.map((e) => e.customOperator).indexOf(true);
        currentFilters.splice(index, 1);
    }
    if (e.value.start && e.value.end) {
        filter.value.filters.push({
            customOperator: true,
            logic: 'and',
            filters: [
                {
                    field: 'FirstOrderedOn',
                    operator: 'gte',
                    value: e.value.start,
                },
                {
                    field: 'FirstOrderedOn',
                    operator: 'lte',
                    value: e.value.end,
                },
            ],
        });
    }
}
</script>
