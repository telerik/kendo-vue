<template>
  <Grid
    ref="grid"
    :style="{ height: '350px' }"
    :data-items="categories"
    :data-item-key="'CategoryID'"
    :detail="cellTemplate"
    :columns="columns"
  >
    <template #myTemplate="{ props }">
      <DetailComponent :data-item="props.dataItem" />
    </template>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import DetailComponent from './DetailComponent.vue';

const cellTemplate = ref('myTemplate');
const columns = ref([
    { field: 'CategoryID', title: 'ID' },
    { field: 'CategoryName', title: 'Name' },
]);
const categories = ref([
    { CategoryID: 1, CategoryName: 'Beverages', Descriptions: 'Soft drinks, coffees, teas, beers, and ales' },
    { CategoryID: 2, CategoryName: 'Condiments', Descriptions: 'Sweet and savory sauces, relishes, spreads, and seasonings' },
    { CategoryID: 3, CategoryName: 'Confections', Descriptions: 'Desserts, candies, and sweet breads' },
    { CategoryID: 4, CategoryName: 'Dairy Products', Descriptions: 'Cheeses' },
    { CategoryID: 5, CategoryName: 'Grains/Cereals', Descriptions: 'Breads, crackers, pasta, and cereal' },
    { CategoryID: 6, CategoryName: 'Meat/Poultry', Descriptions: 'Prepared meats' },
    { CategoryID: 7, CategoryName: 'Produce', Descriptions: 'Dried fruit and bean curd' },
    { CategoryID: 8, CategoryName: 'Seafood', Descriptions: 'Seaweed and fish' },
]);

</script>
