<template>
  <Grid
    :style="{ height: '400px', width: '500px' }"
    :data-items="productsData"
    :reorderable="true"
    @columnreorder="columnReorder"
    :columns="columns"
  >
    <template #myLockedCell="{ props }">
      <td
        :colspan="props.colspan"
        :class="props.class"
        :role="props.role"
        :data-grid-col-index="props['data-grid-col-index']"
        :aria-selected="props['aria-selected']"
      >
        <b>{{ props.dataItem[props.field] }}</b>
      </td>
    </template>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { products } from './products';

const productsData = ref(products);

const columns = ref([
    {
        field: 'ProductID',
        title: 'ID',
        width: '45px',
        cell: 'myLockedCell',
        locked: true,
    },
    {
        field: 'ProductName',
        title: 'Name',
        width: '250px',
    },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price', width: '90px' },
    { field: 'UnitsInStock', title: 'In stock', width: '90px' },
    { field: 'UnitsOnOrder', title: 'On order', width: '90px' },
    {
        field: 'Discontinued',
        locked: true,
        width: '120px',
        cell: 'myLockedCell',
    },
    {
        field: 'QuantityPerUnit',
        title: 'Additional details',
        width: '250px',
    },
]);

const columnReorder = (options) => {
    columns.value = options.columns;
};
</script>
