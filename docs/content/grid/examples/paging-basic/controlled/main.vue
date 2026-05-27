<template>
  <div>
    <Grid
      style="height: 400px"
      :data-items="data"
      :skip="page.skip"
      :take="page.take"
      :total="products.length"
      :pageable="{
        buttonCount: 4,
        pageSizes: [5, 10, 15, 'All'],
        pageSizeValue: pageSizeValue
      }"
      :columns="columns"
      @pagechange="pageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { process } from '@progress/kendo-data-query';
import type { PagerTargetEvent } from '@progress/kendo-vue-data-tools';
import { Grid, type GridPageChangeEvent } from '@progress/kendo-vue-grid';
import products from './gd-products';

interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

const page = ref<PageState>(initialDataState);
const pageSizeValue = ref<number | string | undefined>();

const data = computed(() => {
  return process(products, { skip: page.value.skip, take: page.value.take }).data;
});

const pageChange = (event: GridPageChangeEvent) => {
  const targetEvent = event.event as PagerTargetEvent;
  const take = targetEvent.value === 'All' ? products.length : event.page.take;

  if (targetEvent.value) {
    pageSizeValue.value = targetEvent.value;
  }
  page.value = {
    ...event.page,
    take
  };
};

const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
];
</script>
