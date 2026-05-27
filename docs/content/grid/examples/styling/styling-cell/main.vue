<template>
  <Grid
    :style="{ height: '280px' }"
    :data-items="items"
    :columns="columns"
  >
    <template #myCellTemplate="{ props }">
      <td :style="cellBackground(props.dataItem)">
        {{ props.dataItem[props.field] }}
        <span v-if="props.dataItem.UnitPrice < 15">
          <span class="k-icon k-i-sort-desc-small" />
        </span>
        <span v-else>
          <span class="k-icon k-i-sort-asc-small" />
        </span>
      </td>
    </template>
  </Grid>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const columns = [
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price', cell: 'myCellTemplate' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' },
];

const items = products;

function cellBackground(dataItem) {
    const examplePrice = dataItem.UnitPrice < 15;

    return {
        backgroundColor: examplePrice
            ? 'rgba(243, 23, 0, 0.32)'
            : 'rgba(55, 180, 0, 0.32)',
    };
}
</script>
