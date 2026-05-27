<template>
  <Grid
    :style="{ height: '365px' }"
    :data-items="data.data"
    :total="data.total"
    :sortable="true"
    :sort="dataState.sort"
    :take="dataState.take"
    :skip="dataState.skip"
    :columns="columns"
    @datastatechange="onDataStateChange"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import type { GridDataStateChangeEvent } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import type { State } from '@progress/kendo-data-query';

interface ProductItem {
  ProductID: number;
  version: string;
}

const products: ProductItem[] = [
  { ProductID: 1, version: '8.1.1' },
  { ProductID: 2, version: '5.2.5' },
  { ProductID: 3, version: '40.1.2' },
  { ProductID: 3, version: '1.1.2' },
  { ProductID: 3, version: '1.1.21' },
  { ProductID: 3, version: '40.1.8' },
  { ProductID: 3, version: '40.1.1' },
  { ProductID: 3, version: '40.1.40' }
];

function compareVersions(version1: string, version2: string): number {
  const splitVersion1 = version1.split('.');
  const splitVersion2 = version2.split('.');

  const maxLength = Math.max(splitVersion1.length, splitVersion2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = parseInt(splitVersion1[i] || '0');
    const num2 = parseInt(splitVersion2[i] || '0');

    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    }
  }

  return 0;
}

const customVersionCompare = (a: ProductItem, b: ProductItem, dir: string): number => {
  const correction = dir === 'asc' ? 1 : -1;
  return correction * compareVersions(a.version, b.version);
};

const initialDataState: State = {
  sort: [
    {
      field: 'version',
      dir: 'asc',
      compare: (a, b) => customVersionCompare(a, b, 'asc')
    }
  ],
  take: 10,
  skip: 0
};

const dataState = ref<State>(initialDataState);
const data = computed(() => process(products, dataState.value));

const columns = [
  { field: 'ProductID', title: 'Product Id', filter: 'numeric' },
  { field: 'version' }
];

const onDataStateChange = (e: GridDataStateChangeEvent) => {
  if (e.dataState.sort) {
    e.dataState.sort = e.dataState.sort.map((sort) => {
      if (sort.field == 'version') {
        return {
          ...sort,
          compare: (a, b) => customVersionCompare(a, b, sort.dir || 'asc')
        };
      }
      return sort;
    });
  }
  dataState.value = e.dataState;
};
</script>
