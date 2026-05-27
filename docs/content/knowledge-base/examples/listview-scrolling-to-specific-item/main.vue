<template>
  <button @click="handleClick">Scroll to index 50</button>
  <button @click="handleToBottom">Scroll to bottom</button>
  <button @click="handleToTop">Scroll to top</button>
  <ListView
    :style="{ width: '100%', height: '600px' }"
    :data-items="products"
    item="myItem"
    ref="listViewRef"
  >
    <template #myItem="{ props }">
      <div :style="{ padding: '10px', borderBottom: '1px solid lightgrey' }">
        {{ props.dataItem.ProductName }}
      </div>
    </template>
  </ListView>
</template>

<script setup>
import { ref } from 'vue';
import { ListView } from '@progress/kendo-vue-listview';
import { useListViewScroll } from './useListViewScroll';
import products from './products.json';

const listViewRef = ref(null);
const { scrollToItem, scrollToBottom, scrollToTop } = useListViewScroll();

function handleScrollToItem(index) {
  scrollToItem(listViewRef, index, { block: 'center' });
}

function handleClick() {
  handleScrollToItem(50);
}

function handleToBottom() {
  scrollToBottom(listViewRef);
}

function handleToTop() {
  scrollToTop(listViewRef);
}
</script>
