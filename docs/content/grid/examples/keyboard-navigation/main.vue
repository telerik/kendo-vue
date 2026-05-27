<template>
    <Grid
      ref="grid"
      :pageable="pageable"
      :take="take"
      :skip="skip"
      :total="total"
      :sortable="true"
      :filterable="true"
      :filter="filter"
      :sort="sort"
      :style="{ height: '550px' }"
      :data-items="categories"
      :data-item-key="'CategoryID'"
      :detail="cellTemplate"
      :columns="columns"
      @datastatechange="dataStateChange"
      :navigatable="true"
    >
      <template #myTemplate="{ props }">
        <DetailComponent :data-item="props.dataItem" />
      </template>
    </Grid>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import DetailComponent from './DetailComponent.vue';

const skip = ref(0);
const take = ref(5);
const filter = ref(null);
const sort = ref(null);
const pageable = ref(true);
const cellTemplate = 'myTemplate';
const total = ref(0);
const categories = ref([]);
const columns = [
    { title: 'Category', field: 'CategoryID', filter: 'numeric' },
    { title: 'Category', field: 'CategoryName' },
    { title: 'Descriptions', field: 'Descriptions' },
];

const getData = () => {
    categories.value = process(categoriesList, {
        take: take.value,
        skip: skip.value,
        sort: sort.value,
        filter: filter.value,
    }).data;
    total.value = categoriesList.length;
};

const dataStateChange = (event) => {
    const dataState = event.data;
    take.value = dataState.take;
    skip.value = dataState.skip;
    filter.value = dataState.filter;
    sort.value = dataState.sort;
    getData();
};

onMounted(() => {
    getData();
});

const categoriesList = [
    { CategoryID: 1, CategoryName: 'Beverages', Descriptions: 'Soft drinks, coffees, teas, beers, and ales' },
    { CategoryID: 2, CategoryName: 'Condiments', Descriptions: 'Sweet and savory sauces, relishes, spreads, and seasonings' },
    { CategoryID: 3, CategoryName: 'Confections', Descriptions: 'Desserts, candies, and sweet breads' },
    { CategoryID: 4, CategoryName: 'Dairy Products', Descriptions: 'Cheeses' },
    { CategoryID: 5, CategoryName: 'Grains/Cereals', Descriptions: 'Breads, crackers, pasta, and cereal' },
    { CategoryID: 6, CategoryName: 'Meat/Poultry', Descriptions: 'Prepared meats' },
    { CategoryID: 7, CategoryName: 'Produce', Descriptions: 'Dried fruit and bean curd' },
    { CategoryID: 8, CategoryName: 'Seafood', Descriptions: 'Seaweed and fish' },
];
</script>
