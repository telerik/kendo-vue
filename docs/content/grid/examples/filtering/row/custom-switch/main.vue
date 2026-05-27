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
        <Switch
          :on-label="'Yes'"
          :off-label="'No'"
          :checked="isChecked"
          @change="onDiscontinuedFilterChange"
        />
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { Switch } from '@progress/kendo-vue-inputs';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const showLoader = ref(false);
const isChecked = ref(false);

const filter = computed(() => ({
    logic: 'and',
    filters: [
        { field: 'Discontinued', operator: 'eq', value: isChecked.value },
    ],
}));

const products = computed(() => filterBy(sampleProducts, filter.value));
const columns = computed(() => [
    {
        field: 'ProductID',
        filterable: false,
        title: 'Product ID',
        width: '50px',
    },
    { field: 'ProductName', title: 'Product Name' },
    {
        field: 'Discontinued',
        filterCell: 'filterSlotTemplate',
        title: 'Discontinued',
    },
]);

function filterChange() {
    showLoader.value = true;
    setTimeout(() => {
        showLoader.value = false;
    }, 300);
}

function onDiscontinuedFilterChange() {
    isChecked.value = !isChecked.value;
}
</script>
