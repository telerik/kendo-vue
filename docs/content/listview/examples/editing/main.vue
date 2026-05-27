<template>
  <ListView
    :style="{ width: '100%', height: '500px' }"
    :data-items="products"
    item="myItem"
    header="myHeader"
  >
    <template #myItem="{ props }">
      <ItemRender
        v-bind="props"
        @saveitem="saveData"
        @deleteitem="deleteData"
        @enterEdit="enterEdit"
        @exitEdit="exitEdit"
        @handleChange="handleChange"
      />
    </template>
    <template #myHeader>
      <ListViewHeader
        :style="{ color: 'rgb(160, 160, 160)', fontSize: '14px' }"
        class="pl-3 pb-2 pt-2"
      >
        Product list
      </ListViewHeader>
    </template>
  </ListView>
</template>

<script setup>
import { ref } from 'vue';
import { ListView, ListViewHeader } from '@progress/kendo-vue-listview';
import ItemRender from './ItemRender.vue';
import productsData from './products.json';

const products = ref(productsData);

function saveData(dataItem) {
    products.value = products.value.map((e) =>
        e.ProductID === dataItem.ProductID ? { ...dataItem, edit: false } : e
    );
}

function deleteData(dataItem) {
    products.value = products.value.filter(
        (e) => e.ProductID !== dataItem.ProductID
    );
}
function enterEdit(dataItem) {
    products.value = products.value.map((e) =>
        e.ProductID === dataItem.ProductID ? { ...dataItem, edit: true } : e
    );
}
function exitEdit(dataItem) {
    products.value = products.value.map((e) =>
        e.ProductID === dataItem.ProductID ? { ...dataItem, edit: false } : e
    );
}
function handleChange(dataItem) {
    products.value = products.value.map((e) =>
        e.ProductID === dataItem.ProductID ? { ...dataItem, edit: true } : e
    );
}
</script>
