<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :show-loader="showLoader"
  >
    <template #filterSlotTemplate="{ props }">
      <div>
        <DropDownList
          :data-items="uniqueData"
          text-field="CategoryName"
          value-field="CategoryID"
          @change="(ev) => {
            props.onChange({
              operator: 'contains',
              field: props.field,
              value: ev.value.CategoryName,
              syntheticEvent: ev,
            });
          }"
        />
      </div>
    </template>
  </Grid>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

const showLoader = ref(false);
const uniqueData = ref([]);
const filter = ref({
    logic: 'and',
    filters: [],
});

onMounted(() => {
    uniqueData.value = sampleProducts
        .map((x) => x.Category)
        .filter(
            (x, idx, xs) =>
                xs.findIndex((y) => y.CategoryName === x.CategoryName) === idx
        );
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
        field: 'Category.CategoryName',
        title: 'Category',
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
</script>
