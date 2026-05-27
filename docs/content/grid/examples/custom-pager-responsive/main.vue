<template>
  <div>
    <Grid
      style="height: 400px"
      :data-items="data"
      :skip="page.skip"
      :take="page.take"
      :total="products.length"
      :pager="'pagerTemplate'"
      :pageable="true"
      :columns="columns"
      @pagechange="pageChange"
    >
      <template #pagerTemplate="{ props }">
        <MyPager v-bind="props" />
      </template>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Grid, type GridPageChangeEvent } from '@progress/kendo-vue-grid';
import MyPager from './my-pager.vue';
import products from './gd-products';

interface PageState {
  skip: number;
  take: number;
}

const page = ref<PageState>({ skip: 0, take: 10 });

const data = computed(() => {
  return products.slice(page.value.skip, page.value.take + page.value.skip);
});

const pageChange = (event: GridPageChangeEvent) => {
  page.value = event.page;
};

const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
];
</script>
