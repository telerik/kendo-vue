<template>
  <ListView
    :style="{ width: '100%', height: '300px' }"
    :data-items="products"
    item="myItem"
    @scroll="onScroll"
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
  <br />
  <br />
  <Logger title="Events list" :events="eventsList" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { ListView } from '@progress/kendo-vue-listview';
import Logger from './Logger.vue';
import products from './products.json';

const events = ref([]);

function onScroll() {
    events.value.unshift('The Scroll event was triggered');
}

const eventsList = computed(() => events.value);
</script>
