<template>
  <ListView
    :style="{ width: '100%', height: '600px' }"
    :data-items="products"
    item="myItem"
  >
    <template #myItem="{ props }">
      <div
        class="k-listview-item"
        :style="{ padding: '10px', borderBottom: '1px solid lightgrey' }"
      >
        {{ props.dataItem.ProductName }}
      </div>
    </template>
  </ListView>
</template>

<script setup>
import { ListView } from '@progress/kendo-vue-listview';
import products from './products.json';
</script>
